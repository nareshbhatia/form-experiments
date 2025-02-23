export function TypographyPage() {
  return (
    <div className="container flex-1">
      <main className="py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The King&apos;s Plan
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king thought long and hard, and finally came up with{' '}
          <a
            className="font-medium text-primary underline underline-offset-4"
            href="/"
          >
            a brilliant plan
          </a>
          : he would tax the jokes in the kingdom.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>{' '}
      </main>
    </div>
  );
}
