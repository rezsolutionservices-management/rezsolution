import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1C1C1C',
      borderBottom: '3px solid #F5C000',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '70px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: '1.5rem', color: '#F5C000', letterSpacing: '1px' }}>
        RezSolution Services
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Order Now', href: '/order' },
          { label: 'Business', href: '/business' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ].map(link => (
          <Link key={link.href} href={link.href} style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontFamily: 'Barlow',
            fontWeight: 500,
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
          }}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}