import type { BlogPost } from "@/types";

export const POSTS: BlogPost[] = [
  {
    slug: "internal-tools-big-leverage",
    title: "Internal tools, big leverage",
    excerpt:
      "The most valuable software in a business is often the least visible: the internal tool nobody outside the team will ever see.",
    category: "Building",
    readMinutes: 4,
    publishedAt: "2026-05-08",
    author: "Barqova",
    body: `
<p>The flashy software gets all the attention. Marketing sites, mobile apps, the launch tweet. But sit inside a business for a week and the tools that actually move it are usually the boring ones. An approval flow, a shared dashboard, a script someone wrote in an afternoon that&rsquo;s now load-bearing.</p>
<p>We like building those. They&rsquo;re cheap to start, they pay back almost immediately, and they shape how a team feels about its work every day. A two-week internal tool can save more hours than a six-month rebuild.</p>
<h2>Where we&rsquo;d start</h2>
<p>If you&rsquo;re trying to spot the highest-leverage thing to build, look for the workflow your team complains about quietly. The one that involves three tabs, a spreadsheet, and someone in Ops re-typing the same thing twice a day. That&rsquo;s usually the one.</p>
<p>It almost never needs AI. It almost always needs a sharp interface, a clean data model, and someone willing to actually finish it.</p>
`,
  },
  {
    slug: "ai-without-the-theatre",
    title: "AI without the theatre",
    excerpt:
      "Most AI features in production today are decoration. The interesting work is everything around the model.",
    category: "AI",
    readMinutes: 5,
    publishedAt: "2026-04-22",
    author: "Barqova",
    body: `
<p>It&rsquo;s 2026 and almost every product has an &ldquo;AI&rdquo; feature. Most of them are a chat box bolted onto a sidebar. Some are genuinely useful. The difference is rarely the model. It&rsquo;s the work around the model.</p>
<h2>The unsexy parts</h2>
<p>Where the time actually goes on a serious AI integration:</p>
<ul>
  <li>Picking the slice of work where AI is faster <em>and</em> more accurate than a human.</li>
  <li>Pulling the right context, without leaking customer data into a prompt.</li>
  <li>Building the human handoff. The 5% of cases where a person needs to take over should feel like a feature, not a failure.</li>
  <li>Logging, evals, and the boring loop of &ldquo;why did the model say that?&rdquo;</li>
</ul>
<p>None of that fits in a launch tweet. All of it is what separates a useful AI feature from one that gets quietly disabled in week three.</p>
`,
  },
  {
    slug: "shipping-is-a-skill",
    title: "Shipping is a skill",
    excerpt:
      "Anyone can start a project. Finishing one, well, deployed, monitored, owned, is the part that gets undervalued.",
    category: "Craft",
    readMinutes: 3,
    publishedAt: "2026-03-18",
    author: "Barqova",
    body: `
<p>Half the engineers we&rsquo;ve worked with can build the thing. Far fewer can ship it. Actually deploy it, hand it over, write the runbook, fix the first three production bugs, and stay around long enough to know whether anyone&rsquo;s using it.</p>
<p>Shipping is the part where every shortcut you took shows up. The skipped error handling. The half-thought-through edge case. The README that says &lsquo;TODO&rsquo;. None of it matters in development. All of it matters in week one of production.</p>
<h2>What we mean by &ldquo;done&rdquo;</h2>
<p>We try to keep our internal definition simple: a feature is done when somebody outside the team is using it, we know if it broke, and the next person can read the code without asking us. Anything short of that is still in progress, no matter what the ticket says.</p>
`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostsByDate(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
