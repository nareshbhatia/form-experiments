import { Icons } from '@/components/Icons';
import { mainNavItems } from '@/config/main-nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NavLink, useLocation } from 'react-router';

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className="flex gap-4 lg:gap-6">
      <div className="flex items-center gap-x-2">
        <Icons.atom className="size-6" />
        <span className="font-semibold dark:font-bold">{siteConfig.name}</span>
      </div>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {mainNavItems.map((item) => (
          <NavLink
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === item.href ? 'text-foreground' : 'text-foreground/60',
            )}
            key={item.href}
            to={item.href}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
