export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1C1C1C',
        padding: '5rem 2rem',
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
          Serving CMO Nations & Southwestern Ontario
        </p>
        <h1 style={{
          fontFamily: 'Barlow Condensed',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}>
          Delivery That Shows Up<br />
          <span style={{ color: '#F5C000' }}>For Your Community</span>
        </h1>
        <p style={{
          color: '#CCCCCC',
          fontSize: '1.15rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          Fast, reliable last-mile courier service built for the Chippewas of the Thames,
          Munsee-Delaware, and Oneida Nation. Community rate $10 flat. No forms, no hassle.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/order" style={{
            backgroundColor: '#F5C000',
            color: '#1C1C1C',
            padding: '0.9rem 2.5rem',
            borderRadius: '4px',
            fontFamily: 'Barlow Condensed',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            letterSpacing: '1px',
          }}>
            ORDER NOW
          </a>
          <a href="/services" style={{
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            padding: '0.9rem 2.5rem',
            borderRadius: '4px',
            border: '2px solid #FFFFFF',
            fontFamily: 'Barlow Condensed',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            letterSpacing: '1px',
          }}>
            SEE SERVICES
          </a>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{
        backgroundColor: '#111111',
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
            Simple, Transparent Pricing
          </h2>
          <p style={{ color: '#CCCCCC', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            Your rate is detected automatically based on your delivery address. No forms, no verification needed.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>

          {/* CMO Community Rate */}
          <div style={{
            backgroundColor: '#1C1C1C',
            border: '2px solid #F5C000',
            borderRadius: '8px',
            padding: '2.5rem',
            flex: '1',
            minWidth: '280px',
            maxWidth: '420px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#F5C000',
              color: '#1C1C1C',
              fontFamily: 'Barlow Condensed',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '2px',
              padding: '4px 16px',
              borderRadius: '20px',
            }}>
              CMO ON-RESERVE ORDERS
            </div>
            <h3 style={{
              fontFamily: 'Barlow Condensed',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: '#F5C000',
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            }}>
              Community Rate
            </h3>
            <div style={{
              fontSize: '4rem',
              fontFamily: 'Barlow Condensed',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              marginBottom: '0.25rem',
            }}>
              $10
            </div>
            <p style={{ color: '#AAAAAA', fontSize: '0.9rem', marginBottom: '1.5rem' }}>flat rate per delivery</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Both pickup & drop-off on-reserve',
                'Applies to all 3 CMO nations',
                'Detected automatically by address',
                'No forms or verification needed',
              ].map(item => (
                <li key={item} style={{ color: '#CCCCCC', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#F5C000' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Rate */}
          <div style={{
            backgroundColor: '#1C1C1C',
            border: '2px solid #444444',
            borderRadius: '8px',
            padding: '2.5rem',
            flex: '1',
            minWidth: '280px',
            maxWidth: '420px',
          }}>
            <h3 style={{
              fontFamily: 'Barlow Condensed',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: '#FFFFFF',
              marginBottom: '0.5rem',
            }}>
              Standard Rate
            </h3>
            <div style={{
              fontSize: '2.5rem',
              fontFamily: 'Barlow Condensed',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              marginBottom: '0.25rem',
            }}>
              $0.45<span style={{ fontSize: '1.2rem' }}>/km</span>
            </div>
            <p style={{ color: '#AAAAAA', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Distance-based pricing · $10 minimum</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Southwestern Ontario coverage',
                'Transparent pricing, no hidden fees',
                'Package surcharges from $2–$6',
                'Same-day rush add-on +$8',
              ].map(item => (
                <li key={item} style={{ color: '#CCCCCC', fontSize: '0.95rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#AAAAAA' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Quick Links Grid */}
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
            What We Deliver
          </h2>
          <p style={{ color: '#CCCCCC', fontSize: '1rem' }}>
            From groceries to prescriptions — we've got you covered.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {[
            { icon: '🍔', label: 'Food Orders', desc: 'Hot meals from local spots' },
            { icon: '🚬', label: 'Smoke & Snack', desc: 'ID verified at delivery' },
            { icon: '🛒', label: 'Groceries', desc: 'Full shopping runs' },
            { icon: '📦', label: 'General Parcel', desc: 'Packages & courier' },
            { icon: '💊', label: 'Pharmacy/Rx', desc: 'Prescription pickup & drop' },
            { icon: '📄', label: 'Documents', desc: 'Secure document delivery' },
          ].map(item => (
            <a key={item.label} href="/services" style={{
              backgroundColor: '#111111',
              border: '1px solid #333333',
              borderRadius: '8px',
              padding: '1.75rem 1.5rem',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'border-color 0.2s',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <div style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#FFFFFF',
                marginBottom: '0.4rem',
              }}>{item.label}</div>
              <div style={{ color: '#AAAAAA', fontSize: '0.85rem' }}>{item.desc}</div>
            </a>
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
              letterSpacing: '0.5px',
            }}>
              {nation}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}