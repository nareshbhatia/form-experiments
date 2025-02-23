import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

export function ButtonsPage() {
  return (
    <div className="container flex-1">
      <main className="flex flex-col gap-8 py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Buttons
        </h1>
        <div className="flex gap-4">
          <Button size="sm">Primary</Button>
          <Button size="sm" variant="secondary">
            Secondary
          </Button>
          <Button size="sm" variant="destructive">
            Destructive
          </Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
          <Button size="sm" variant="link">
            Link
          </Button>
          <Button size="icon" variant="outline">
            <Icons.chevronRight />
          </Button>
          <Button size="sm">
            <Icons.mail /> Login with Email
          </Button>
          <Button disabled size="sm">
            <Icons.loader2 className="animate-spin" />
            Please wait
          </Button>
        </div>
      </main>
    </div>
  );
}
