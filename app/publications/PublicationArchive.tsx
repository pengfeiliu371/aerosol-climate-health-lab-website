"use client";

import { useMemo, useState } from "react";
import {
  inPreparation,
  inReview,
  peerReviewed,
  supplementalLinks,
} from "../data/publications";

type PublicationYear = {
  year: string;
  citations: string[];
};

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function CitationText({ text }: { text: string }) {
  const activeSupplementalLinks = supplementalLinks.filter(({ citationIncludes }) =>
    text.includes(citationIncludes)
  );
  const supplementalLabels = activeSupplementalLinks.map(({ label }) => escapeRegExp(label));
  const tokenPattern = supplementalLabels.length
    ? new RegExp(`(https?:\\/\\/[^\\s\\]]+|${supplementalLabels.join("|")})`, "g")
    : /(https?:\/\/[^\s\]]+)/g;
  const parts = text.split(tokenPattern);

  return <>{parts.map((part, index) => {
    const supplementalLink = activeSupplementalLinks.find(({ label }) => label === part);
    if (supplementalLink) {
      return (
        <a
          className="publication-extra-link"
          key={`${supplementalLink.href}-${index}`}
          href={supplementalLink.href}
          target="_blank"
          rel="noreferrer"
        >
          {part}
        </a>
      );
    }
    return part.startsWith("http")
      ? <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">{part}</a>
      : part;
  })}</>;
}

function groupPeerReviewed(entries: readonly string[]): PublicationYear[] {
  const groups: PublicationYear[] = [];
  let current: PublicationYear | undefined;

  for (const entry of entries) {
    const combinedYearAndCitation = entry.match(/^(\d{4}(?: and Earlier)?)\s*\n([\s\S]+)$/);
    if (combinedYearAndCitation) {
      current = { year: combinedYearAndCitation[1], citations: [combinedYearAndCitation[2]] };
      groups.push(current);
      continue;
    }
    if (/^\d{4}$/.test(entry)) {
      current = { year: entry, citations: [] };
      groups.push(current);
      continue;
    }
    current?.citations.push(entry);
  }

  return groups;
}

const publicationYears = groupPeerReviewed(peerReviewed);

function yearId(year: string) {
  return `publications-${year.toLowerCase().replace(/\s+/g, "-")}`;
}

function PublicationRow({ citation, status }: { citation: string; status?: string }) {
  return (
    <article>
      <time>{status}</time>
      <p><CitationText text={citation} /></p>
    </article>
  );
}

export function PublicationArchive() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();

  const filtered = useMemo(() => {
    const matches = (citation: string) =>
      !normalizedQuery || citation.toLocaleLowerCase().includes(normalizedQuery);

    return {
      preparation: inPreparation.filter(matches),
      review: inReview.filter(matches),
      years: publicationYears
        .map(({ year, citations }) => ({ year, citations: citations.filter(matches) }))
        .filter(({ citations }) => citations.length > 0),
    };
  }, [normalizedQuery]);

  const resultCount = filtered.preparation.length
    + filtered.review.length
    + filtered.years.reduce((total, group) => total + group.citations.length, 0);
  const hasQuery = normalizedQuery.length > 0;

  return (
    <section className="page-body publication-list">
      <p className="kicker">COMPLETE PUBLICATION ARCHIVE</p>
      <p className="archive-note">Publications from 2009 to the present. * indicates corresponding author.</p>

      <div className="publication-tools">
        <label className="publication-search">
          <span>Search the archive</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Author, title, journal, or keyword"
          />
        </label>
        <p className="publication-result-count" aria-live="polite">
          {hasQuery ? `${resultCount} result${resultCount === 1 ? "" : "s"}` : `${resultCount} publications`}
        </p>
      </div>

      <nav className="publication-year-nav" aria-label="Jump to publication year">
        <span>Jump to year</span>
        {(hasQuery ? filtered.years : publicationYears).map(({ year }) => (
          <a key={year} href={`#${yearId(year)}`}>{year.replace(" and Earlier", " & earlier")}</a>
        ))}
      </nav>

      {filtered.preparation.length > 0 && <>
        <h2 className="publication-section-heading">In preparation</h2>
        {filtered.preparation.map((citation) => <PublicationRow key={citation} citation={citation} status="NEW" />)}
      </>}

      {filtered.review.length > 0 && <>
        <h2 className="publication-section-heading">Submitted or in review</h2>
        {filtered.review.map((citation) => <PublicationRow key={citation} citation={citation} status="NEW" />)}
      </>}

      {filtered.years.length > 0 && <h2 className="publication-section-heading">Peer-reviewed articles</h2>}
      {filtered.years.map(({ year, citations }) => <section className="publication-year-group" id={yearId(year)} key={year}>
        <h3 className="publication-year">{year}</h3>
        {citations.map((citation) => <PublicationRow key={citation} citation={citation} />)}
      </section>)}

      {resultCount === 0 && <div className="publication-empty">
        <h2>No matching publications</h2>
        <p>Try an author surname, journal title, research topic, or year.</p>
        <button type="button" onClick={() => setQuery("")}>Clear search</button>
      </div>}
    </section>
  );
}
