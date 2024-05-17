export default function Footer() {
  const years = new Date().getFullYear();
  return (
    <footer>
      <nav className="mx-auto max-w-7xl overflow-hidden py-4 px-6 lg:px-8">
        <p className="mt-1 text-center text-xs leading-5">Romi - Web Development</p>
        <p className="mt-1 text-center text-xs leading-5">&copy; {years} Romi. All rights reserved.</p>
      </nav>
    </footer>
  );
}