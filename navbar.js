// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between p-6 bg-gray-800 text-white">
    <div className="text-2xl font-bold">Alexa Dev SRM</div>
    <div className="flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/team">Team</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
