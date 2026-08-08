import { posts } from "../data/news";
import { PageShell } from "../components/SiteChrome";
import { ScientificText } from "../components/ScientificText";
import { sitePath } from "../lib/sitePath";
import "./news.css";

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function EmphasizedText({ text, terms = [] }: { text: string; terms?: string[] }) {
  if (!terms.length) return <ScientificText text={text} />;

  const orderedTerms = [...terms].sort((a, b) => b.length - a.length);
  const termSet = new Set(orderedTerms);
  const parts = text.split(new RegExp(`(${orderedTerms.map(escapeRegExp).join("|")})`, "g"));

  return <>{parts.map((part, index) => (
    termSet.has(part)
      ? <em key={`${part}-${index}`}><ScientificText text={part} /></em>
      : <ScientificText text={part} key={`${part}-${index}`} />
  ))}</>;
}

export default function NewsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="kicker">NEWS</p>
          <h1 aria-label="News from the lab.">News from<br />the <em>lab.</em></h1>
          <p>Research highlights, publications, awards, and milestones from our group.</p>
        </section>
        <section className="page-body news-page">
          <p className="kicker">LATEST</p>
          {posts.map(({ date, text, href, linkLabel, emphasis, image, imageAlt }) => (
            <article className="news-item" key={text}>
              <div className="news-copy">
                <time>{date}</time>
                <h2>
                  <EmphasizedText text={text} terms={emphasis} />
                  {href ? (
                    <>
                      {" "}<a href={href} target="_blank" rel="noreferrer">{linkLabel}</a>.
                    </>
                  ) : null}
                </h2>
              </div>
              <div className="news-media">
                {image ? (
                  <figure className="news-photo">
                    <img src={sitePath(image)} alt={imageAlt} loading="lazy" decoding="async" />
                  </figure>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}

