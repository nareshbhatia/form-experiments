import { RoutePath } from './RoutePath';

export interface NavItem {
  title: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: 'Typography',
    href: RoutePath.Typography,
  },
  {
    title: 'Buttons',
    href: RoutePath.Buttons,
  },
];
