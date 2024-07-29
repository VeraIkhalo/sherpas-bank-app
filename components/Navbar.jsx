import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between">
        <Link href="/">Home</Link>
        <Link href="deposit">Deposit</Link>
        <Link href="/withdraw">Withdraw</Link>
        <Link href="/transfer">Transfer</Link>
        <Link href="/statement">Statement</Link>
      </nav>
    </header>
  );
};

export default Navbar;
