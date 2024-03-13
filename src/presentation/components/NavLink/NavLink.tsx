import { HTMLAttributeAnchorTarget } from 'react';
import NavLink from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  children: JSX.Element;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  title?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  target,
  title,
}) => {
  const { query } = useRouter();
  const newQuery = new URLSearchParams(query as unknown as string);

  return (
    <NavLink
      href={newQuery?.size ? `${href}/?${newQuery}` : href}
      target={target}
      title={title}
    >
      {children}
    </NavLink>
  );
};
