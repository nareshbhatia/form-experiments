import { cn } from '@/lib/utils';

export interface Heading1Props {
  children: React.ReactNode;
}

export function Heading1({ children }: Heading1Props) {
  return (
    <h1 className={cn('text-4xl font-bold tracking-tight')}>{children}</h1>
  );
}
