import Link from "next/link";
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Header() {
  return (
    <div className="flex w-full px-36 py-6 items-center gap-10">
      <h1 className="flex text-center items-center">LM E-commerce</h1>

      <div className="flex flex-col w-full">
        <div className="flex w-full pb-4 text-base items-center justify-between border-b-[1px]">
          <input
            className="w-1/3 border-gray-500 border-[1px] rounded-md text-black py-1 px-2"
            type="search"
            placeholder="Search"
          />
          <div>
            <Link href="/">Contato</Link>
          </div>
        </div>

        <div className="flex py-4 w-full items-center justify-between">
          <div className="flex w-full justify-between">
            <Link href="/">Home</Link>
            <Link href="/">Sobre nós</Link>
            <Link href="/">Produtos</Link>
            <Link href="/">Contato</Link>
            <Link href="/"> <HiOutlineShoppingCart size={24} /> </Link>
            <Link href="/">(19) 99644-1801</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
