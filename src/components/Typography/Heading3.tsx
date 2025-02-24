import { cn } from '@/lib/utils';

export interface Heading3Props {
  children: React.ReactNode;
}

export function Heading3({ children }: Heading3Props) {
  return (
    <h3 className={cn('text-xl font-semibold tracking-tight mb-2')}>
      {children}
    </h3>
  );
}
