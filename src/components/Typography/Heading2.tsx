import { cn } from '@/lib/utils';

export interface Heading2Props {
  children: React.ReactNode;
}

export function Heading2({ children }: Heading2Props) {
  return (
    <h2 className={cn('text-2xl font-semibold tracking-tight')}>{children}</h2>
  );
}
