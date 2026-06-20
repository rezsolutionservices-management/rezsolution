import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'RezSolution Services',
  description: 'Last-mile courier and delivery for CMO Nations and Southwestern Ontario.',
  verification: {
    google: '5Vq9EzkBU9_O5XRbc97wQBZNqS1ShJ5jtRpCZ1wW56M',
  },
  openGraph: {
    title: 'RezSolution Services',
    description: 'Fast. Reliable. For Our Nation. Last-mile courier serving CMO Nations and Southwestern Ontario.',
    url: 'https://www.rezsolutionservices.com',
    siteName: 'RezSolution Services',
    images: [
      {
        url: 'https://www.rezsolutionservices.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RezSolution Services',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}