/* eslint-disable react/display-name */
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<
      NextLinkProps,
      'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'
    > {
  href: NextLinkProps['href'];
}

const LinkComponent = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  ({ href, children, ...props }, ref) => {
    return (
      <NextLink href={href} passHref {...props}>
        {children}
      </NextLink>
    );
  }
);

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'href' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, style: internalStyle, ...nextLinkProps }, ref) => {
    return (
      <MuiLink
        component={LinkComponent}
        underline="none"
        ref={ref}
        style={internalStyle}
        {...nextLinkProps}
        href={href}
      />
    );
  }
);
