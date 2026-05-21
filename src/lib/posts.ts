import type { BlogPost } from "@/types";

export const POSTS: BlogPost[] = [
  {
    slug: "hire-remote-dev-team-india-2026",
    title: "Should you hire a remote dev team from India in 2026? An honest guide",
    excerpt:
      "The pros, the real costs, the cultural friction, and the questions to ask before you sign. Written by founders running an Indian remote studio.",
    category: "Hiring",
    readMinutes: 9,
    publishedAt: "2026-05-14",
    author: "Barqova",
    body: `
<p><strong>TL;DR.</strong></p>
<ul>
  <li>You'll save 50-70% vs US/UK rates for similar engineering quality, but only if you pick correctly.</li>
  <li>Timezone overlap matters more than headline rate. Aim for 3-4 hours of overlap, not "we'll catch up async".</li>
  <li>The biggest risk isn't quality. It's communication cadence, ownership culture, and follow-through after the cheque clears.</li>
</ul>

<h2>Why this guide exists</h2>
<p>We run an Indian remote software company. We've sat on both sides of this conversation. As the team that gets hired, and as people who've worked with US, UK, and EU founders for years. This is what we'd tell a friend who asked.</p>

<h2>What you actually save</h2>
<p>Real 2026 hourly rates we see in the market:</p>
<ul>
  <li><strong>US/UK senior engineer (agency):</strong> $150-250/hr</li>
  <li><strong>EU senior engineer (agency):</strong> $90-160/hr</li>
  <li><strong>India senior engineer (premium studio):</strong> $35-70/hr</li>
  <li><strong>India mid-level (bulk shop):</strong> $15-30/hr</li>
</ul>
<p>For a typical 12-week MVP, that's the difference between a $90k bill and a $30k bill. Real money for a founder pre-Series A.</p>

<h2>Where the savings disappear</h2>
<p>You don't save a rupee if any of these happen:</p>
<ol>
  <li><strong>You hire by hourly rate alone.</strong> Cheapest hour delivers the most rework. Mid-tier India studios often deliver more value per dollar than the absolute cheapest.</li>
  <li><strong>You skip the scoping phase.</strong> If the brief is vague, the cheap team will build the vague version. Premium teams push back. Cheap teams ship.</li>
  <li><strong>You batch communication to once-a-week.</strong> Async-only kills momentum. Plan one daily 30-min sync at minimum.</li>
  <li><strong>You hire a freelancer pretending to be a team.</strong> They juggle 3-4 clients. Your "full-time dev" is 25% of someone's brain.</li>
</ol>

<h2>The cultural friction nobody talks about</h2>
<p>Indian engineering culture and Western startup culture have some real differences. Worth naming:</p>

<h3>Hierarchy is sticky</h3>
<p>Junior devs in India often won't push back on a senior or a client. That sounds polite. It costs you. If your team agrees with your bad ideas, you'll ship them. Hire a team where the lead pushes back.</p>

<h3>"Done" means different things</h3>
<p>In some shops, "done" means "the ticket is closed". In others, it means "deployed, monitored, and someone outside the team is using it". Establish your definition of done before sprint 1.</p>

<h3>The "yes" problem</h3>
<p>You'll get "yes" to every feature request. Sometimes that means agreement. Sometimes it means "I'll figure out how later". Ask follow-ups: "What's the first risk? What might go wrong?"</p>

<h2>Timezone math (the part founders underestimate)</h2>
<p>India Standard Time is GMT+5:30. Overlap by region:</p>
<ul>
  <li><strong>US East:</strong> 2-3 hours overlap (their morning, our evening). Workable with one daily call.</li>
  <li><strong>US West:</strong> 0-1 hour overlap. Hard. Plan for fully async or shift one side's hours.</li>
  <li><strong>UK/EU:</strong> 4-6 hours overlap. Comfortable. Your morning is their afternoon.</li>
  <li><strong>Australia/Singapore:</strong> 2-5 hours overlap. Good.</li>
</ul>
<p>The dirty secret: lots of Indian agencies <em>say</em> they cover US hours. Half don't. They have a sales person on US time and the actual devs on India time. Ask who specifically you'll work with day-to-day.</p>

<h2>Questions to ask before you sign</h2>
<ol>
  <li>Who specifically is on this project, full-time? Can I meet them?</li>
  <li>What does a typical sprint look like? How do we know we're on track mid-sprint?</li>
  <li>Show me code you've shipped to production. Not a marketing screenshot. An actual repo or working URL.</li>
  <li>Who owns the code after handover? Will I get clean, documented repos?</li>
  <li>What happens if I want to part ways at week 6? What's the off-ramp?</li>
  <li>How do you handle disagreement on technical decisions?</li>
  <li>What's the smallest project you'd take and the largest you've shipped?</li>
</ol>

<h2>Red flags to walk away from</h2>
<ul>
  <li>The pitch deck shows logos of companies you've heard of but no case study or named contact</li>
  <li>"We can start tomorrow" (no team has bench capacity for the right team)</li>
  <li>Hourly rate without a scope estimate</li>
  <li>No designer in the proposal for a product-shaped project</li>
  <li>Refusal to scope in 2-week sprints</li>
  <li>NDA before the discovery call (gatekeeping the conversation)</li>
</ul>

<h2>Green flags</h2>
<ul>
  <li>They push back on your scope or timeline before you've signed</li>
  <li>They send you a written scope doc after the first call</li>
  <li>They show you live code, not just polished decks</li>
  <li>You meet the actual lead developer in the second call</li>
  <li>They mention things they won't do or can't do well</li>
</ul>

<h2>Pricing models you'll see</h2>
<p>Four common ways agencies bill, ranked from least to most predictable for the founder:</p>
<ol>
  <li><strong>Hourly or retainer.</strong> You pay for time clocked. Works for discovery, R&amp;D, or open-ended support. Risk: nobody is incentivised to finish fast, and "hours" become hard to audit from another country.</li>
  <li><strong>Fixed scope.</strong> One bid for one spec. Works when the brief is genuinely locked. Risk: every change is a "change request" with its own fee, and the brief is almost never locked early on.</li>
  <li><strong>Milestone-based.</strong> Payment ties to deliverables (design done, v1 deployed, etc.). Works for phased builds with mid-clarity scope. Risk: milestones slip, and the team often defers the painful bits to the final milestone.</li>
  <li><strong>Sprint-based, 2-week fixed.</strong> Fixed cost per sprint, fixed sprint length, working software each sprint. Works for actually building product over time. This is the model we use because it surfaces problems early instead of in week ten.</li>
</ol>

<h2>What we tell new clients on the first call</h2>
<p>The biggest predictor of success isn't price, rate, or location. It's whether your team and ours can disagree well and update fast. Hire for that.</p>

<h2>If this sounds like your situation</h2>
<p>We run Barqova Technologies. Remote, India-based, founder-led. We build custom software, web apps, mobile apps, AI integrations and SaaS for founders worldwide. If you'd like to talk through your project, <a href="/contact">book a 15-minute call</a>. No prep needed.</p>
`,
  },
  {
    slug: "what-ai-integration-actually-means",
    title: "What 'AI integration' actually means in 2026 (and what it usually doesn't)",
    excerpt:
      "Every product claims to have AI now. Most don't, in any meaningful sense. Here's how to tell the difference, and what real AI integration looks like inside a working product.",
    category: "AI",
    readMinutes: 7,
    publishedAt: "2026-05-12",
    author: "Barqova",
    body: `
<p><strong>TL;DR.</strong></p>
<ul>
  <li>Most "AI features" shipped today are a chat box bolted onto an existing product. That's not integration.</li>
  <li>Real AI integration changes the workflow, not the sidebar.</li>
  <li>The hard work is around the model, not the model itself: data, context, evals, human handoff.</li>
</ul>

<h2>The definition problem</h2>
<p>"AI integration" has become marketing for "we wired up an LLM somewhere". The term needs more precision because every founder hearing it makes a different assumption.</p>

<p>Useful definition: <strong>AI integration means embedding a model into a workflow such that the user's behaviour changes</strong>. If removing the AI changes nothing about how the user works, you don't have integration. You have decoration.</p>

<h2>The three categories you'll see in the wild</h2>

<h3>1. AI decoration (90% of "AI features" shipped in 2025-26)</h3>
<ul>
  <li>Chat box in a sidebar</li>
  <li>"Summarise this" button on a doc</li>
  <li>Auto-generated email draft you'll rewrite anyway</li>
  <li>Search bar that's now "AI-powered" but returns the same results</li>
</ul>
<p>These are not bad. They're just not integration. The user can ignore them and lose nothing.</p>

<h3>2. AI augmentation</h3>
<ul>
  <li>Inline suggestions inside the workflow (Cursor for code, Notion AI inside docs)</li>
  <li>Smart defaults that learn from past behaviour</li>
  <li>Auto-tagging and categorisation that save real clicks</li>
</ul>
<p>The user notices when it's missing. Workflow is faster with it. This is real integration, at a small scale.</p>

<h3>3. AI as the workflow</h3>
<ul>
  <li>Customer support triage that routes 80% of tickets, escalates 20% with full context</li>
  <li>Document intake that extracts structured data and files it correctly</li>
  <li>An internal copilot trained on your docs that new hires actually use</li>
  <li>A coding agent that runs tasks end-to-end with human review at gates</li>
</ul>
<p>The product is the AI workflow. The UI exists to support it. This is where the leverage is.</p>

<h2>Why most teams stop at decoration</h2>
<p>Because decoration is easy and demos well. You can ship a sidebar chat in a weekend. Real integration takes:</p>

<ul>
  <li><strong>Picking the right slice.</strong> Which 20% of the workflow is repetitive enough that AI is faster <em>and</em> more accurate than a human?</li>
  <li><strong>Plumbing the context.</strong> What does the model need to see to give good answers? Where does that data live? How does it get there without leaking?</li>
  <li><strong>Defining the human handoff.</strong> When does the model defer to a person? How does the handoff feel like a feature, not a failure?</li>
  <li><strong>Building the eval loop.</strong> How do you know if the model is getting worse? Who looks at the wrong answers and tunes the prompt?</li>
  <li><strong>Setting the safety floor.</strong> What's the worst-case bad output and how do you guard against it?</li>
</ul>

<p>None of this fits in a launch tweet. All of it is what separates a useful AI feature from one that gets quietly disabled in week three.</p>

<h2>What real AI integration looks like architecturally</h2>
<p>A simplified picture of a serious AI integration:</p>

<pre><code>User action
  → Context retrieval (RAG, account state, recent events)
  → Prompt template with cached system instructions
  → Model call (Claude / GPT / whatever fits)
  → Output validation (structured schema, safety check)
  → Action (write, route, draft, suggest)
  → Logging + eval signal
  → Human handoff path if confidence is low</code></pre>

<p>The model is one node in a longer pipeline. Most of the engineering work is the other nodes.</p>

<h2>The "AI integration" smell test</h2>
<p>Ask yourself or your vendor:</p>
<ol>
  <li>If I remove the AI feature, does any user notice within 24 hours?</li>
  <li>What data does the model see, and how is it kept fresh?</li>
  <li>What happens when the model is confidently wrong?</li>
  <li>Who looks at the bad outputs and tunes the prompt?</li>
  <li>Is the model the workflow, or a button next to the workflow?</li>
</ol>

<p>If most answers are "we hadn't thought about that", you're looking at decoration, not integration.</p>

<h2>The cost question</h2>
<p>A surprise for founders: model cost is rarely the bottleneck. In a serious integration, you'll spend more on:</p>

<ul>
  <li>Engineering time tuning the prompt and the context pipeline</li>
  <li>The eval infrastructure</li>
  <li>The human-in-loop interface and the team operating it</li>
  <li>Vector database / RAG infra at scale</li>
</ul>

<p>API calls are usually the cheapest line item. Estimating cost on token-count alone misses 90% of the real spend.</p>

<h2>When AI integration is the wrong answer</h2>
<p>Sometimes the right answer is "don't add AI". Cases where it usually isn't worth it:</p>

<ul>
  <li>Your team uses the tool 20 times a day, not 2000</li>
  <li>The output needs to be exactly correct, every time, no review (e.g. payments routing)</li>
  <li>Your data isn't structured enough to feed the model usefully</li>
  <li>The "manual" version takes 30 seconds anyway</li>
  <li>Compliance/audit makes the "why did it say that" question expensive to answer</li>
</ul>

<h2>If you're thinking about this for your product</h2>
<p>We build AI integration applications at Barqova Technologies. Real ones, not decoration. If you'd like to talk through whether AI integration is the right move for your product, <a href="/contact">book a 15-minute call</a>. Or try the <a href="/fit-finder">Fit Finder</a> to see if AI is the right capability for your project at all.</p>
`,
  },
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

export function getAllCategories(): string[] {
  const set = new Set<string>();
  POSTS.forEach((p) => set.add(p.category));
  return Array.from(set).sort();
}

export function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
