import { RoutePath } from './RoutePath';

export interface NavItem {
  title: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: 'Simple Form',
    href: RoutePath.SimpleForm,
  },
  {
    title: 'Modular Form',
    href: RoutePath.ModularForm,
  },
  {
    title: 'Order Form',
    href: RoutePath.OrderForm,
  },
];
