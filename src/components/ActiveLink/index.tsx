import React from "react";
import { LinkActive } from "./LinkActive";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  return (
    <LinkActive href={href} passHref>
      <span className="font-medium text-lg">{children}</span>
    </LinkActive>
  );
}
