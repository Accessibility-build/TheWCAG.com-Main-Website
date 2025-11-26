import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  CheckCircle2,
  ExternalLink,
  Users,
  AlertTriangle,
  MessageSquare,
  TrendingDown,
  Heart,
  Scale,
} from "lucide-react"
import { format } from "date-fns"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Why Is Accessibility Being De-Linked from Disability? | TheWCAG",
  description:
    "A critical examination of how accessibility messaging is shifting away from disability. We explore a Reddit discussion about why 'it helps everyone' has replaced 'it helps disabled people' as the primary accessibility argument, and what this means for the disability community.",
  keywords: [
    "accessibility and disability",
    "disability rights",
    "accessibility messaging",
    "universal design",
    "disability inclusion",
    "accessibility advocacy",
    "disability community",
    "accessibility ethics",
  ],
  openGraph: {
    title: "Why Is Accessibility Being De-Linked from Disability?",
    description:
      "Exploring why accessibility is increasingly framed as 'good for everyone' rather than essential for disabled people. A critical look at what this shift means for the disability community.",
    url: "https://thewcag.com/blog/why-is-accessibility-being-delinked-from-disability",
    type: "article",
    siteName: "TheWCAG - An accessibility Guide",
    images: [
      {
        url: "https://thewcag.com/Logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility and Disability Discussion",
      },
    ],
  },
  alternates: {
    canonical: "https://thewcag.com/blog/why-is-accessibility-being-delinked-from-disability",
  },
}

export default function BlogPost() {
  const publishedDate = new Date("2025-01-27")

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Is Accessibility Being De-Linked from Disability?",
    description:
      "A critical examination of how accessibility messaging is shifting away from disability and what this means for the disability community.",
    url: "https://thewcag.com/blog/why-is-accessibility-being-delinked-from-disability",
    author: {
      "@type": "Organization",
      name: "The WCAG Team",
      url: "https://thewcag.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TheWCAG.com",
      url: "https://thewcag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thewcag.com/Logo.png",
      },
    },
    datePublished: "2025-01-27",
    dateModified: "2025-01-27",
    articleSection: "Accessibility Ethics",
    keywords: ["Accessibility and Disability", "Disability Rights", "Accessibility Advocacy", "Disability Inclusion"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://thewcag.com/blog/why-is-accessibility-being-delinked-from-disability",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewcag.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://thewcag.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Why Is Accessibility Being De-Linked from Disability?",
          item: "https://thewcag.com/blog/why-is-accessibility-being-delinked-from-disability",
        },
      ],
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Is Accessibility Being De-Linked from Disability?
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6" role="group" aria-label="Article metadata">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={publishedDate.toISOString()}>
                {format(publishedDate, "MMMM d, yyyy")}
              </time>
            </div>
            <span aria-hidden="true">•</span>
            <span>Written by <span className="font-medium">The WCAG Team</span></span>
          </div>

          {/* Quick Answer Card */}
          <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 mb-8" role="region" aria-labelledby="quick-answer-title">
            <CardHeader>
              <CardTitle id="quick-answer-title" className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Quick Answer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">
                Accessibility is increasingly being framed as &quot;good for everyone&quot; or &quot;good UX&quot; rather than essential for disabled people. 
                While this messaging may be more effective in getting buy-in from businesses, it risks sidelining the very people accessibility was designed to serve.
              </p>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="mb-8" role="region" aria-labelledby="key-takeaways-title">
            <CardHeader>
              <CardTitle id="key-takeaways-title" className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" aria-hidden="true" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Disabled people are being pushed out</strong> of the center of accessibility conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Business framing</strong> (&quot;helps everyone&quot;, &quot;good SEO&quot;) often works better than disability-first arguments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Many accessibility professionals</strong> use universal design arguments because they&apos;re more effective at getting funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Legal and business arguments</strong> often resonate more than empathy-based appeals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>The question remains:</strong> Should we prioritize effectiveness over authenticity in accessibility messaging?</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </header>

        {/* Introduction */}
        <section className="mb-12" aria-labelledby="introduction-heading">
          <h2 id="introduction-heading" className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-7 w-7 shrink-0" aria-hidden="true" />
            The Pattern: Disability Disappearing from Accessibility Conversations
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              A recent Reddit discussion in the accessibility community raised a critical question: <strong>Why is accessibility being de-linked from disability?</strong>
            </p>
            <p className="mb-4">
              The original poster noticed a concerning pattern: accessibility is increasingly being presented in business contexts, tech talks, and DEI initiatives as either a legal requirement or something that &quot;benefits everyone.&quot; What&apos;s often missing? The lived experiences of disabled people the group that accessibility most directly supports.
            </p>
            <p>
              As the poster put it: <em>&quot;It&apos;s as if saying &apos;this is for disabled people&apos; is no longer seen as persuasive enough. The messaging becomes: &apos;It helps everyone!&apos; or &apos;It&apos;s good UX!&apos; or &apos;It boosts SEO!&apos;&quot;</em>
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Core Question */}
        <section className="mb-12" aria-labelledby="core-question-heading">
          <h2 id="core-question-heading" className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Heart className="h-7 w-7 shrink-0" aria-hidden="true" />
            The Core Question: Are We Not Worth Doing It For?
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              The original post asked a powerful question: <strong>&quot;Are we not worth doing it for on our own?&quot;</strong>
            </p>
            <p className="mb-4">
              Why is the fact that accessibility empowers disabled people that it&apos;s essential for our participation, our rights, our dignity not the main point anymore?
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl my-6" cite="https://www.reddit.com/r/accessibility/">
              <p>&quot;We&apos;re not edge cases or an optional bonus. We&apos;re the reason accessibility exists. Yes, others benefit but we need it.&quot;</p>
            </blockquote>
            <p className="mt-4 mb-4">
              The post highlighted a painful reality: disabled people are being treated as &quot;too political, too uncomfortable, or simply not appealing enough as a reason on our own.&quot; It feels like making the world accessible for disabled people isn&apos;t compelling unless it can be reframed as helping &quot;everyone.&quot;
            </p>
            <p>
              <strong>But aren&apos;t we worth doing it for our own sake?</strong>
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Reality Check */}
        <section className="mb-12" aria-labelledby="reality-check-heading">
          <h2 id="reality-check-heading" className="text-2xl md:text-3xl font-bold mb-6">The Reality Check: What Actually Works</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            <p className="mb-4">
              The Reddit discussion revealed a harsh truth: <strong>disability-first arguments often don&apos;t work in corporate environments.</strong>
            </p>
            <p className="mb-4">
              One accessibility professional with over 20 years of experience shared: <em>&quot;I don&apos;t tend to push the disability angle in front of business people, they don&apos;t care about people, they care about money.&quot;</em>
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. The Business Reality</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  Multiple commenters shared similar experiences: telling boardrooms that captioning benefits people with disabilities gets ignored. But telling them that paying customers benefit from captioning, or that their own vision will decline with age? Suddenly you have buy-in.
                </p>
                <p className="mb-4">
                  As one professional noted: <em>&quot;I ain&apos;t saying it&apos;s right, but it is effective.&quot;</em>
                </p>
                <ul className="space-y-2 my-4 list-disc list-inside">
                  <li>Legal risk and lawsuit costs resonate more than empathy</li>
                  <li>Market expansion arguments (&quot;Purple Pound&quot; in the UK) get attention</li>
                  <li>SEO and UX benefits are easier sells than disability rights</li>
                  <li>Self-interest framing (&quot;you too could become disabled&quot;) works better</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. The Invisibility Problem</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  One commenter pointed out a critical issue: <em>&quot;Most people don&apos;t have real relationships with disabled folks, so they don&apos;t see the impact of inaccessibility.&quot;</em>
                </p>
                <p className="mb-4">
                  Disability has been made invisible for generations. Historical &quot;ugly laws&quot; literally banned disabled people from being seen in public. Chicago&apos;s ugly laws weren&apos;t repealed until 1974. That kind of erasure doesn&apos;t just disappear it gets baked into culture.
                </p>
                <p className="mb-4">
                  As another commenter noted: <em>&quot;Even though wheelchairs are literally the symbol of disability, I think it&apos;s been months since I&apos;ve actually seen somebody using one.&quot;</em>
                </p>
                <p>
                  When disability is invisible, it&apos;s easier to ignore and easier to reframe accessibility as something else entirely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. The Empathy Gap</CardTitle>
              </CardHeader>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="mb-4">
                  Many commenters observed that people need to picture themselves or someone they care about in a situation before they take it seriously. One professional shared:
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4" cite="https://www.reddit.com/r/accessibility/">
                  <p>&quot;It reminds me of how people talk about sexual assault: &apos;What if it was your sister, your mom, your daughter?&apos; Like human pain only matters if it can be filtered through someone they value.&quot;</p>
                </blockquote>
                <p className="mt-4">
                  The &quot;everyone benefits&quot; framing is used to make accessibility more palatable to people who don&apos;t want to think about disability, who don&apos;t want to face their own biases, or who think they&apos;ll never need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Professional Dilemma */}
        <section className="mb-12" aria-labelledby="dilemma-heading">
          <h2 id="dilemma-heading" className="text-2xl md:text-3xl font-bold mb-6">The Professional Dilemma: Effectiveness vs. Authenticity</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              The discussion revealed a difficult tension for accessibility professionals: <strong>Should we use the messaging that works, even if it sidelines disabled people?</strong>
            </p>
            <p className="mb-4">
              One commenter framed it as a &quot;devil&apos;s advocate&quot; question:
            </p>
            <blockquote className="border-l-4 border-amber-500 pl-4 italic my-6" cite="https://www.reddit.com/r/accessibility/">
              <p>&quot;Is it worthwhile to reframe accessibility as &apos;good UX&apos; if it results in leadership support, budgets being unlocked, and features being developed? Even if the framing is a little cowardly?&quot;</p>
            </blockquote>
            <p className="mt-4 mb-4">
              Many professionals shared that they use different messaging for different audiences:
            </p>
            <ul className="space-y-2 my-6 list-disc list-inside">
              <li><strong>For business decision-makers:</strong> Legal risk, market expansion, ROI arguments</li>
              <li><strong>For developers/designers:</strong> Real-world disability examples and empathy-based explanations</li>
              <li><strong>For executives:</strong> Lawsuit costs, untapped markets, competitive advantage</li>
            </ul>
            <p className="mb-4">
              As one professional put it: <em>&quot;If it means my accessibility work gets funded, I&apos;ll sell it however I can, because I know the value of the work.&quot;</em>
            </p>
            <p>
              But this raises a critical question: <strong>Are we teaching organizations to completely disregard the people at the heart of accessibility?</strong>
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Systemic Issues */}
        <section className="mb-12" aria-labelledby="systemic-issues-heading">
          <h2 id="systemic-issues-heading" className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Scale className="h-7 w-7 shrink-0" aria-hidden="true" />
            The Systemic Issues: Why This Happens
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              The discussion highlighted several systemic reasons why accessibility gets de-linked from disability:
            </p>
            <ul className="space-y-2 my-6 list-disc list-inside">
              <li><strong>Businesses optimize for profit, not people:</strong> As one commenter noted, &quot;Businesses do not give a s##t about anyone who is not truly profitable.&quot;</li>
              <li><strong>Political climate:</strong> In the US, people are afraid of anything &quot;smelling remotely like equity and diversity&quot;</li>
              <li><strong>Lack of accountability:</strong> &quot;People, just like companies, only optimize towards what they are held accountable for&quot;</li>
              <li><strong>Economic disadvantage:</strong> Many people with disabilities are in worse economic conditions, making them less attractive as a market</li>
              <li><strong>Resource requirements:</strong> Building accessible products requires better knowledge and additional resources</li>
            </ul>
            <p className="mb-4">
              One EU-based professional shared: <em>&quot;I&apos;ve been in the field for 15 years now, and I&apos;m tired of convincing business decision makers and tired of &apos;evangelization&apos;. This is why we need legislation that enforces the change.&quot;</em>
            </p>
            <p>
              The solution, for many, is clear: <strong>legislation and enforcement</strong>, not persuasion.
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Counter-Arguments */}
        <section className="mb-12" aria-labelledby="counter-arguments-heading">
          <h2 id="counter-arguments-heading" className="text-2xl md:text-3xl font-bold mb-6">Counter-Arguments: Why Universal Design Framing Exists</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              Not all commenters saw the universal design framing as problematic. Some argued it serves important purposes:
            </p>
            <ul className="space-y-2 my-6 list-disc list-inside">
              <li><strong>Not everyone with access needs identifies as disabled</strong> - accommodations should be available without requiring disclosure</li>
              <li><strong>Normalizing individual accommodations</strong> - offering accessibility as standard helps everyone</li>
              <li><strong>Making accessibility mainstream</strong> - wider adoption means better support and cheaper assistive technology</li>
              <li><strong>The curb-cut effect is real</strong> - things designed for disabled people do benefit everyone (like video captions)</li>
            </ul>
            <p className="mb-4">
              One training professional noted: <em>&quot;We frame &apos;access needs&apos; and &apos;inclusion&apos; as &apos;for everyone&apos; because accommodations should not be dependent on disclosure of a disability.&quot;</em>
            </p>
            <p>
              However, the original poster&apos;s point remains: <strong>Can we acknowledge universal benefits without erasing disabled people from the conversation?</strong>
            </p>
          </div>
        </section>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        {/* The Way Forward */}
        <section className="mb-12" aria-labelledby="way-forward-heading">
          <h2 id="way-forward-heading" className="text-2xl md:text-3xl font-bold mb-6">The Way Forward: No Simple Solutions</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="mb-4">
              The discussion didn&apos;t provide easy answers, but it highlighted important considerations:
            </p>
            <ul className="space-y-2 my-6 list-disc list-inside">
              <li><strong>Legislation matters:</strong> Many professionals emphasized that enforcement is more effective than persuasion</li>
              <li><strong>Different audiences need different messages:</strong> What works for developers may not work for executives</li>
              <li><strong>Centering disabled voices:</strong> Co-creating content with disabled people ensures authenticity</li>
              <li><strong>Balancing effectiveness and ethics:</strong> Using business arguments to get work done while maintaining disability-first values</li>
            </ul>
            <p className="mb-4">
              As one commenter reflected: <em>&quot;It should be enough to say: this matters because it impacts real people, right now. Not just someday. Not just maybe. And not just if it benefits everyone else too.&quot;</em>
            </p>
            <p>
              The question remains: <strong>How do we make accessibility happen without erasing the people it&apos;s designed to serve?</strong>
            </p>
          </div>
        </section>

        {/* Sources */}
        <Card className="mt-12" role="region" aria-labelledby="sources-heading">
          <CardHeader>
            <CardTitle id="sources-heading">Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-2">
                <ExternalLink className="h-4 w-4 mt-1 text-muted-foreground shrink-0" aria-hidden="true" />
                <div>
                  <a
                    href="https://www.reddit.com/r/accessibility/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Reddit Discussion: Why is accessibility being de-linked from disability? (opens in new tab)"
                  >
                    Reddit Discussion: Why is accessibility being de-linked from disability?
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Reddit r/accessibility Community Discussion
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer note */}
        <footer className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border" role="contentinfo" aria-label="Article footer">
          <p className="text-center text-muted-foreground">
            <strong>Written by The WCAG Team</strong>
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">
            This article is based on a community discussion. We encourage continued dialogue about how accessibility is framed and who it centers.
          </p>
        </footer>

        {/* Related Links */}
        <nav className="mt-12" aria-label="Related content">
          <h3 className="text-2xl font-bold mb-6">Explore More</h3>
          <div className="grid gap-4 md:grid-cols-2" role="list">
            <Link href="/blog" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg">
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Back to Blog</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore more articles about accessibility
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/accessibility" className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg">
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Accessibility Statement</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn about our commitment to accessibility
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </nav>
      </article>
    </>
  )
}

