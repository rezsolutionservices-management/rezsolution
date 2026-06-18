'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

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
          Get In Touch
        </p>
        <h1 style={{
          fontFamily: 'Barlow Condensed',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          We're Here When You Need Us
        </h1>
        <p style={{
          color: '#CCCCCC',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Questions, quotes, or just want to know if we cover your area — reach out any time.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{
        backgroundColor: '#111111',
        padding: '5rem 2rem',
        borderBottom: '4px solid #F5C000',
      }}>
        <div style={{
          display: 'flex',
          gap: '4rem',
          maxWidth: '1100px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}>

          {/* Contact Form */}
          <div style={{ flex: '2', minWidth: '280px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed',
              fontWeight: 800,
              fontSize: '2rem',
              color: '#FFFFFF',
              marginBottom: '2rem',
            }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div style={{
                backgroundColor: '#1a3a1a',
                border: '2px solid #2E7D32',
                borderRadius: '8px',
                padding: '2.5rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{
                  fontFamily: 'Barlow Condensed',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#FFFFFF',
                  marginBottom: '0.5rem',
                }}>Message Sent!</h3>
                <p style={{ color: '#CCCCCC', fontSize: '1rem' }}>
                  Thanks {form.name} — we'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {error && (
                  <div style={{
                    backgroundColor: '#2a0a0a',
                    border: '1px solid #D42B2B',
                    borderRadius: '4px',
                    padding: '0.75rem 1rem',
                    color: '#D42B2B',
                    fontSize: '0.9rem',
                  }}>
                    {error}
                  </div>
                )}
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your name' },
                  { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com' },
                  { name: 'phone', label: 'Phone Number (optional)', type: 'tel', placeholder: '(519) 000-0000' },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      color: '#CCCCCC',
                      fontFamily: 'Barlow',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                    }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        backgroundColor: '#1C1C1C',
                        border: '1px solid #444444',
                        borderRadius: '4px',
                        padding: '0.75rem 1rem',
                        color: '#FFFFFF',
                        fontFamily: 'Barlow',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{
                    display: 'block',
                    color: '#CCCCCC',
                    fontFamily: 'Barlow',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                  }}>Message *</label>
                  <textarea
                    name="message"
                    placeholder="What can we help you with?"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    style={{
                      width: '100%',
                      backgroundColor: '#1C1C1C',
                      border: '1px solid #444444',
                      borderRadius: '4px',
                      padding: '0.75rem 1rem',
                      color: '#FFFFFF',
                      fontFamily: 'Barlow',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button type="submit" style={{
                  backgroundColor: '#F5C000',
                  color: '#1C1C1C',
                  padding: '0.9rem 2.5rem',
                  borderRadius: '4px',
                  fontFamily: 'Barlow Condensed',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  border: 'none',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}>
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ flex: '1', minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <h3 style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#F5C000',
                marginBottom: '1rem',
              }}>Contact Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '📞', label: 'Phone', value: 'Coming soon' },
                  { icon: '📧', label: 'Email', value: 'RezSolutionServices@gmail.com' },
                  { icon: '📘', label: 'Facebook', value: 'Coming soon' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#AAAAAA', fontSize: '0.8rem', marginBottom: '0.1rem' }}>{item.label}</div>
                      <div style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#F5C000',
                marginBottom: '1rem',
              }}>Hours</h3>
              <p style={{ color: '#CCCCCC', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Monday – Sunday<br />
                Flexible hours<br />
                <span style={{ color: '#AAAAAA', fontSize: '0.85rem' }}>Contact us to confirm availability</span>
              </p>
            </div>

            <div style={{
              backgroundColor: '#1C1C1C',
              border: '1px solid #333333',
              borderRadius: '8px',
              padding: '1.5rem',
            }}>
              <h3 style={{
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#FFFFFF',
                marginBottom: '0.5rem',
              }}>Ready to order?</h3>
              <p style={{ color: '#AAAAAA', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Skip the form and place your order directly.
              </p>
              <a href="/order" style={{
                backgroundColor: '#F5C000',
                color: '#1C1C1C',
                padding: '0.7rem 1.5rem',
                borderRadius: '4px',
                fontFamily: 'Barlow Condensed',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '1px',
                display: 'inline-block',
              }}>
                ORDER NOW
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}