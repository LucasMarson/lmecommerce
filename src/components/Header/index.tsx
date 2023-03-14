import Link from "next/link";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import MenuLink from "./MenuLink";

export default function Header() {
  return (
    <div className="flex w-full px-36 py-2 items-center gap-10 bg-orange">
      <h1 className="flex text-center items-center text-white">
        LM E-commerce
      </h1>

      <div className="flex flex-col w-full text-white">
        <div className="flex w-full pb-3 text-sm items-center justify-between border-b border-b-white">
          <div className="flex items-center w-1/2">
            <HiSearch className="h-4 w-4 text-white" />
            <input
              type="text"
              className="ml-4 py-2 w-full text-white border-b border-transparent focus:outline-none focus:border-white bg-orange placeholder-white"
              placeholder="Pesquise aqui"
            />
          </div>

          <div>
            <Link href="/" className="flex items-center gap-2">
              <BsInstagram />
              Instagram
            </Link>
          </div>
        </div>

        <div className="flex py-3 text-base w-full items-center justify-between">
          <div className="flex w-full justify-between font-medium">
            <MenuLink title="Service" href="/service">
              <div className="flex flex-col">
                <Link href="/">jcnkndaksjcjk</Link>
                <Link href="/service/sssss">sxs</Link>
                <Link href="/service/ssss">sxaxas</Link>
                <Link href="/service/xsx">xxx</Link>
              </div>
            </MenuLink>

            <Link href="/">Sobre nós</Link>
            <Link href="/">Produtos</Link>
            <Link href="/">Contato</Link>
            <Link href="/">
              <HiOutlineShoppingCart size={24} />
            </Link>
            <Link href="/">(19) 99644-1801</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
