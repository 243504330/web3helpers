import WalletPanel from "../../components/evm/WalletPanel";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="max-w-6xl w-full my-4 px-4 flex justify-between items-center">
      <Link href="/">
        <a className="text-2xl px-4 md:px-0 md:text-4xl font-medium">Web 3.0 Helpers</a>
      </Link>
      <WalletPanel></WalletPanel>
    </div>
  );
};

export default NavBar;
