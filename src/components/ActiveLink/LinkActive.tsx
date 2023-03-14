import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveProps extends LinkProps {
  children: ReactElement;
}

export function LinkActive({ children, ...rest }: ActiveProps) {
  const { asPath } = useRouter();

  const isActive = 
    (rest.href === "/" && asPath === "/") || // verificação para o caminho inicial
    (rest.href !== "/" && asPath.startsWith(String(rest.href))); // verificação para outros caminhos

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className: `
          ${children.props.className}
          hover:text-black
          ${isActive ? "text-black" : "text-white"}
        `,
      })}
    </Link>
  );
}
