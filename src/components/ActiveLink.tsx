import { useRouter } from "next/router";
import { ReactElement } from "react";

function ActiveLink({
  children,
  href,
}: {
  children: ReactElement;
  href: string;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ActiveLink;
