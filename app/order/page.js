"use client";
import { useState, useRef, useEffect } from "react";

const PACKAGE_TYPES = [
  { id: "food", label: "Food Order", surcharge: 3 },
  { id: "smoke", label: "Smoke & Snack Run", surcharge: 2 },
  { id: "grocery", label: "Groceries", surcharge: 3 },
  { id: "parcel", label: "General Parcel", surcharge: 2 },
  { id: "pharmacy", label: "Pharmacy / Rx", surcharge: 3 },
  { id: "documents", label: "Documents", surcharge: 0 },
];

const SHOPPING_TYPES = ["food", "smoke", "grocery"];

function calcStandardRate(km, packageSurcharge, rush) {
  const labour = (km / 40) * 20;
  const base = km * 0.38 + labour;
  const withMargin = base * 1.2;
  const total = withMargin + packageSurcharge + (rush ? 8 : 0);
  return Math.max(10, Math.round(total * 100) / 100);
}

function useGoogleMapsScript(apiKey) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window.google) { setLoaded(true); return; }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, [apiKey]);
  return loaded;
}

function AddressInput({ label, placeholder, onSelect, value }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;
    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "ca" },
      fields: ["formatted_address", "geometry"],
    });
    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current.getPlace();
      if (place.formatted_address) {
        onSelect(place.formatted_address, place.geometry?.location);
      }
    });
  }, []);

  return (
    <div>
      <label style={{ color: "#555555", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" }}>{label}</label>
      <input ref={inputRef} defaultValue={value} placeholder={placeholder} style={{ width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none" }} />
    </div>
  );
}

function MapPreview({ pickupLocation, dropoffLocation, apiKey }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const directionsRendererRef = useRef(null);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: 42.9, lng: -81.5 },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
      directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
      directionsRendererRef.current.setMap(mapInstanceRef.current);
    }

    if (pickupLocation && dropoffLocation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route({
        origin: pickupLocation,
        destination: dropoffLocation,
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(result);
        }
      });
    }
  }, [pickupLocation, dropoffLocation]);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "300px", borderRadius: "8px", border: "1px solid #E5E7EB", marginTop: "1rem" }} />
  );
}

export default function Order() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapsLoaded = useGoogleMapsScript(apiKey);

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [packageType, setPackageType] = useState("");
  const [rush, setRush] = useState(false);
  const [items, setItems] = useState([{ name: "", qty: 1 }]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [km, setKm] = useState(null);
  const [tier, setTier] = useState(null);

  const selectedPackage = PACKAGE_TYPES.find(p => p.id === packageType);
  const isShopping = SHOPPING_TYPES.includes(packageType);
  const showMap = mapsLoaded && (pickupLocation || dropoffLocation);

  const quote = km && selectedPackage && tier === "standard"
    ? calcStandardRate(km, selectedPackage.surcharge, rush)
    : tier === "cmo" ? 10 : null;

  function handlePickupSelect(address, location) {
    setPickup(address);
    setPickupLocation(location);
  }

  function handleDropoffSelect(address, location) {
    setDropoff(address);
    setDropoffLocation(location);
  }

  function calculateDistance() {
    if (!pickupLocation || !dropoffLocation || !window.google) return;
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [pickupLocation],
      destinations: [dropoffLocation],
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === "OK") {
        const distanceMeters = response.rows[0].elements[0].distance.value;
        const distanceKm = distanceMeters / 1000;
        setKm(Math.round(distanceKm * 10) / 10);
        if (!tier) setTier("standard");
      }
    });
  }

  useEffect(() => {
    if (pickupLocation && dropoffLocation) {
      calculateDistance();
    }
  }, [pickupLocation, dropoffLocation]);

  function addItem() { setItems([...items, { name: "", qty: 1 }]); }
  function updateItem(i, field, val) {
    const updated = [...items];
    updated[i][field] = val;
    setItems(updated);
  }
  function removeItem(i) { setItems(items.filter((_, idx) => idx !== i)); }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!pickup || !dropoff || !packageType || !name || !phone) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone, email, pickup, dropoff,
          package_type: selectedPackage?.label || packageType,
          tier: tier || "unknown",
          fee: quote || 0,
          rush,
          notes,
          items: isShopping ? JSON.stringify(items.filter(i => i.name)) : "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    }
    setLoading(false);
  }

  const inputStyle = { width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none" };
  const labelStyle = { color: "#555555", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" };

  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>Fast & Reliable</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>Place Your Order</h1>
        <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Fill in your details below. Your rate is calculated automatically based on your addresses.
        </p>
      </section>

      <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap" }}>

          {submitted ? (
            <div style={{ flex: 1, backgroundColor: "#ECFDF5", border: "2px solid #059669", borderRadius: "8px", padding: "3rem", textAlign: "center" }}>
              <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628", marginBottom: "1rem" }}>Order Received!</h2>
              <p style={{ color: "#666666", fontSize: "1rem", lineHeight: 1.7 }}>
                Thanks {name} — your order has been received. We will contact you shortly to confirm and send your e-transfer payment link.
              </p>
              {quote && (
                <div style={{ marginTop: "1.5rem", backgroundColor: "#FFFFFF", borderRadius: "6px", padding: "1rem", border: "1px solid #E5E7EB" }}>
                  <p style={{ color: "#999999", fontSize: "0.9rem" }}>Delivery Fee Due</p>
                  <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2.5rem" }}>${quote.toFixed(2)}</p>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ flex: 2, minWidth: "280px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {error && (
                <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #DC2626", borderRadius: "4px", padding: "0.75rem 1rem", color: "#DC2626", fontSize: "0.9rem" }}>{error}</div>
              )}

              <div style={{ backgroundColor: "#F4F5F7", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "1.25rem" }}>Delivery Details</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {mapsLoaded ? (
                    <>
                      <AddressInput label="Pickup Address" placeholder="Start typing an address..." onSelect={handlePickupSelect} value={pickup} />
                      <AddressInput label="Drop-off Address" placeholder="Start typing an address..." onSelect={handleDropoffSelect} value={dropoff} />
                    </>
                  ) : (
                    <>
                      <div>
                        <label style={labelStyle}>Pickup Address</label>
                        <input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Enter pickup address" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Drop-off Address</label>
                        <input value={dropoff} onChange={e => setDropoff(e.target.value)} placeholder="Enter drop-off address" style={inputStyle} />
                      </div>
                    </>
                  )}

                  {showMap && (
                    <MapPreview pickupLocation={pickupLocation} dropoffLocation={dropoffLocation} apiKey={apiKey} />
                  )}

                  {km && (
                    <div style={{ backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "4px", padding: "0.75rem 1rem", color: "#1E40AF", fontSize: "0.9rem" }}>
                      Distance calculated: <strong>{km} km</strong> — quote updated automatically.
                    </div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <input type="checkbox" id="cmo" onChange={e => setTier(e.target.checked ? "cmo" : (km ? "standard" : null))} style={{ width: "18px", height: "18px", cursor: "pointer" }} />
                    <label htmlFor="cmo" style={{ ...labelStyle, marginBottom: 0, cursor: "pointer" }}>Both addresses are on CMO reserve land ($10 flat rate)</label>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: "#F4F5F7", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "1.25rem" }}>Package Type</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
                  {PACKAGE_TYPES.map(p => (
                    <button key={p.id} type="button" onClick={() => setPackageType(p.id)} style={{ padding: "0.85rem 1rem", borderRadius: "4px", border: packageType === p.id ? "2px solid #F5C000" : "2px solid #DDDDDD", backgroundColor: packageType === p.id ? "#FEF3C7" : "#FFFFFF", color: packageType === p.id ? "#92400E" : "#333333", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                      {p.label}
                    </button>
                  ))}
                </div>
                {packageType === "smoke" && (
                  <div style={{ marginTop: "1rem", backgroundColor: "#FEF3C7", border: "1px solid #F5C000", borderRadius: "4px", padding: "0.75rem 1rem", color: "#92400E", fontSize: "0.85rem" }}>
                    ID verification required at delivery. Order handed only to the person who placed it.
                  </div>
                )}
              </div>

              {isShopping && (
                <div style={{ backgroundColor: "#F4F5F7", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                  <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>Item List</h2>
                  <p style={{ color: "#999999", fontSize: "0.85rem", marginBottom: "1rem" }}>List the items you need. Item cost will be billed separately after pickup.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {items.map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                        <input value={item.name} onChange={e => updateItem(i, "name", e.target.value)} placeholder="Item name" style={{ ...inputStyle, flex: 3 }} />
                        <input type="number" min="1" value={item.qty} onChange={e => updateItem(i, "qty", e.target.value)} style={{ ...inputStyle, flex: 1, textAlign: "center" }} />
                        {items.length > 1 && (
                          <button type="button" onClick={() => removeItem(i)} style={{ background: "none", border: "none", color: "#DC2626", fontSize: "1.2rem", cursor: "pointer" }}>x</button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={addItem} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #DDDDDD", borderRadius: "4px", color: "#555555", padding: "0.5rem 1rem", fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", cursor: "pointer" }}>+ Add Item</button>
                  </div>
                </div>
              )}

              <div style={{ backgroundColor: "#F4F5F7", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "1.25rem" }}>Delivery Speed</h2>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {[{ id: false, label: "Standard", desc: "Next available slot" }, { id: true, label: "Priority", desc: "+$8 added to your quote" }].map(opt => (
                    <button key={String(opt.id)} type="button" onClick={() => setRush(opt.id)} style={{ padding: "0.85rem 1.5rem", borderRadius: "4px", border: rush === opt.id ? "2px solid #F5C000" : "2px solid #DDDDDD", backgroundColor: rush === opt.id ? "#FEF3C7" : "#FFFFFF", color: rush === opt.id ? "#92400E" : "#333333", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", cursor: "pointer", textAlign: "left" }}>
                      {opt.label}
                      <span style={{ display: "block", fontSize: "0.8rem", color: "#999999", fontWeight: 400 }}>{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: "#F4F5F7", borderRadius: "8px", padding: "1.5rem", border: "1px solid #E5E7EB" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "1.25rem" }}>Your Details</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[{ label: "Full Name *", val: name, set: setName, type: "text", ph: "Your name" }, { label: "Phone Number *", val: phone, set: setPhone, type: "tel", ph: "(519) 000-0000" }, { label: "Email Address", val: email, set: setEmail, type: "email", ph: "your@email.com" }].map(f => (
                    <div key={f.label}>
                      <label style={labelStyle}>{f.label}</label>
                      <input type={f.type} value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph} style={inputStyle} required={f.label.includes("*")} />
                    </div>
                  ))}
                  <div>
                    <label style={labelStyle}>Delivery Notes</label>
                    <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Any special instructions?" style={{ ...inputStyle, resize: "vertical" }} />
                  </div>
                </div>
              </div>

              <button type="submit" disabled={loading} style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "1rem 2.5rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "1px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, alignSelf: "flex-start" }}>
                {loading ? "SUBMITTING..." : "CONFIRM ORDER"}
              </button>

            </form>
          )}

          <div style={{ flex: 1, minWidth: "240px" }}>
            <div style={{ backgroundColor: "#0A1628", border: "2px solid #F5C000", borderRadius: "8px", padding: "2rem", position: "sticky", top: "90px" }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#F5C000", marginBottom: "1.5rem" }}>Your Quote</h3>
              {quote ? (
                <>
                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ color: "#AAAAAA", fontSize: "0.85rem" }}>Rate Tier</p>
                    <p style={{ color: tier === "cmo" ? "#4ADE80" : "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{tier === "cmo" ? "CMO Community Rate" : "Standard Rate"}</p>
                  </div>
                  {tier === "standard" && km && (
                    <div style={{ marginBottom: "1rem" }}>
                      <p style={{ color: "#AAAAAA", fontSize: "0.85rem" }}>Distance</p>
                      <p style={{ color: "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{km} km</p>
                    </div>
                  )}
                  {selectedPackage && (
                    <div style={{ marginBottom: "1rem" }}>
                      <p style={{ color: "#AAAAAA", fontSize: "0.85rem" }}>Package Type</p>
                      <p style={{ color: "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{selectedPackage.label}</p>
                    </div>
                  )}
                  {rush && (
                    <div style={{ marginBottom: "1rem" }}>
                      <p style={{ color: "#AAAAAA", fontSize: "0.85rem" }}>Delivery Speed</p>
                      <p style={{ color: "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>Priority</p>
                    </div>
                  )}
                  <div style={{ borderTop: "1px solid #1a2a3a", paddingTop: "1rem", marginTop: "1rem" }}>
                    <p style={{ color: "#AAAAAA", fontSize: "0.85rem" }}>Delivery Fee</p>
                    <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "3rem", lineHeight: 1 }}>${quote.toFixed(2)}</p>
                    <p style={{ color: "#666666", fontSize: "0.8rem", marginTop: "0.5rem" }}>Due upfront via e-transfer</p>
                  </div>
                  {isShopping && (
                    <div style={{ backgroundColor: "#111111", borderRadius: "4px", padding: "0.75rem", marginTop: "1rem" }}>
                      <p style={{ color: "#AAAAAA", fontSize: "0.8rem" }}>Item costs billed separately after pickup.</p>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <p style={{ color: "#666666", fontSize: "0.9rem", lineHeight: 1.6 }}>Enter your addresses to see your quote automatically.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
