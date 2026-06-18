import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'RezSolution Services',
  description: 'Last-mile courier and delivery for CMO Nations and Southwestern Ontario.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}