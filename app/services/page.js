export default function Services() {
  return (
    <main>

      {/* Hero */}
      <section style={{
        backgroundColor: '#1C1C1C',
        padding: '4rem 2rem',
        textAlign: 'center',
        borderBottom: '4px solid #F5C000',
      }}>
        <p style={{
          color: '#F5C000',
          fontFamily: 'Barlow Condensed',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          What We Offer
        </p>
        <h1 style={{
          fontFamily: 'Barlow Condensed',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          Our Delivery Services
        </h1>
        <p style={{
          color: '#CCCCCC',
          fontSize: '1.1rem',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Six delivery types, one reliable operator. CMO community rate or standard — your quote is calculated automatically.
        </p>
      </section>

      {/* Service Cards */}
      <section style={{
        backgroundColor: '#111111',
        padding: '5rem 2rem',
        borderBottom: '4px solid #F5C000',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {[
            {
              icon: '🍔',
              label: 'Food Order',
              surcharge: '+$3',
              desc: 'Hot meals from local restaurants, home kitchens, or CMO eatery partners. Two-step payment — delivery fee upfront, food cost billed after pickup.',
              note: null,
            },
            {
              icon: '🚬',
              label: 'Smoke & Snack Run',
              surcharge: '+$2',
              desc: 'Tobacco products and convenience snacks delivered to your door. Item list submitted at order, delivery fee paid upfront.',
              note: '⚠️ ID verification required at delivery. Order handed only to the person who placed it.',
            },
            {
              icon: '🛒',
              label: 'Groceries',
              surcharge: '+$3',
              desc: 'Full grocery shopping runs. Submit your list, pay delivery fee upfront, grocery cost billed separately after pickup.',
              note: null,
            },
            {
              icon: '📦',
              label: 'General Parcel',
              surcharge: '+$2',
              desc: 'Packages, courier items, and general goods. Pick up from one address and drop off at another — straightforward and reliable.',
              note: null,
            },
            {
              icon: '💊',
              label: 'Pharmacy / Rx',
              surcharge: '+$3',
              desc: 'Prescription pickup and delivery from your pharmacy. We handle the pickup so you don\'t have to make the trip.',
              note: null,
            },
            {
              icon: '📄',
              label: 'Documents',
              surcharge: '$0',
              desc: 'Secure document delivery — contracts, forms, legal papers. No package surcharge on documents.',
              note: null,
            },
          ].map(service => (
            <div key={service.label} style={{
              backgroundColor: '#1C1C1C',
              border: '1px solid #333333',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: '#FFFFFF',
                  }}>{service.label}</h3>
                </div>
                <span style={{
                  backgroundColor: service.surcharge === '$0' ? '#333333' : '#2a2000',
                  color: service.surcharge === '$0' ? '#AAAAAA' : '#F5C000',
                  fontFamily: 'Barlow Condensed',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                }}>
                  {service.surcharge} surcharge
                </span>
              </div>
              <p style={{ color: '#CCCCCC', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
              {service.note && (
                <div style={{
                  backgroundColor: '#2a1a00',
                  border: '1px solid #F5C000',
                  borderRadius: '4px',
                  padding: '0.75rem 1rem',
                  color: '#F5C000',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}>
                  {service.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        backgroundColor: '#1C1C1C',
        padding: '5rem 2rem',
        borderBottom: '4px solid #F5C000',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#FFFFFF',
            marginBottom: '0.75rem',
          }}>
            How It Works
          </h2>
          <p style={{ color: '#CCCCCC', fontSize: '1rem' }}>Four steps from order to door.</p>
        </div>
        <div style={{
          display: 'flex',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {[
            { step: '01', title: 'Place Your Order', desc: 'Fill out the order form with your pickup and drop-off addresses. Your rate is calculated automatically.' },
            { step: '02', title: 'Pay Delivery Fee', desc: 'Delivery fee is collected upfront via e-transfer to confirm your order and protect operator time.' },
            { step: '03', title: 'We Pick Up', desc: 'Your driver heads to the pickup location. For shopping orders, items are purchased on your behalf.' },
            { step: '04', title: 'Delivered to Your Door', desc: 'Your order arrives. Shopping order item costs billed separately after delivery confirmation.' },
          ].map(item => (
            <div key={item.step} style={{
              flex: '1',
              minWidth: '200px',
              maxWidth: '220px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 800,
                fontSize: '3rem',
                color: '#F5C000',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}>{item.step}</div>
              <h3 style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#FFFFFF',
                marginBottom: '0.5rem',
              }}>{item.title}</h3>
              <p style={{ color: '#AAAAAA', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CMO Coverage Strip */}
      <section style={{
        backgroundColor: '#D42B2B',
        padding: '3rem 2rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Barlow Condensed',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          color: '#FFFFFF',
          marginBottom: '0.75rem',
        }}>
          Proudly Serving CMO Territory
        </h2>
        <p style={{ color: '#FFDDDD', fontSize: '1rem', marginBottom: '2rem' }}>
          Community rate applies when both pickup and drop-off are on-reserve within any CMO nation.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {[
            'Chippewas of the Thames First Nation',
            'Munsee-Delaware Nation',
            'Oneida Nation of the Thames',
          ].map(nation => (
            <div key={nation} style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '4px',
              padding: '0.75rem 1.5rem',
              color: '#FFFFFF',
              fontFamily: 'Barlow Condensed',
              fontWeight: 700,
              fontSize: '1rem',
            }}>
              {nation}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}