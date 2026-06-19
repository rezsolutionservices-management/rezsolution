import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'RezSolution Services',
  description: 'Last-mile courier and delivery for CMO Nations and Southwestern Ontario.',
  icons: {
    icon: '/rssmobilelogo.png',
    apple: '/rssmobilelogo.png',
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