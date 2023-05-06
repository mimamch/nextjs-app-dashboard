import { ExternalLink } from '@/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h1 className="text-xl font-bold">Layouts</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptates
        eligendi aliquid itaque dignissimos deleniti sed praesentium. Totam
        optio nulla eum animi, molestiae dignissimos minus a praesentium
        consequuntur natus minima commodi facere eaque illo quas sequi quae
        itaque. Minus eligendi corrupti illum placeat voluptatibus ipsam
        perferendis. Earum provident quaerat debitis!
      </p>

      <ul>
        <li>
          A layout is UI that is shared between multiple pages. On navigation,
          layouts preserve state, remain interactive, and do not re-render. Two
          or more layouts can also be nested.
        </li>
        <li>Try navigating between categories and sub categories.</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://beta.nextjs.org/docs/routing/pages-and-layouts">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
