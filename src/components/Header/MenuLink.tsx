import Link from "next/link";
import { useState } from "react";
import { ActiveLink } from "../ActiveLink";

type DropdownProps = {
  title: string;
  children: React.ReactElement;
  href: string;
};

export default function MenuLink({ title, children, href }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={openModal}
      onMouseLeave={closeModal}
    >
      <ActiveLink href={href}>{title}</ActiveLink>
      {isOpen && (
        <div
          className="absolute top-7 text-black left-0 bg-gray p-4 rounded-md"
          onMouseEnter={openModal}
          onMouseLeave={closeModal}
        >
          {children}
        </div>
      )}
    </div>
  );
}
