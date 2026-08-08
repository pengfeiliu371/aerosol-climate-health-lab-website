# Manual Website Content-Editing Guide

This guide explains how to update the laboratory website directly in GitHub without using Codex or installing software.

- Repository: <https://github.com/pengfeiliu371/aerosol-climate-health-lab-website>
- Published website: <https://pengfeiliu371.github.io/aerosol-climate-health-lab-website/>

## 1. The safest way to edit a file in GitHub

1. Sign in to GitHub and open the repository.
2. Open the file you want to change using the table below.
3. Click the pencil icon labeled **Edit this file**.
4. Make the change in the editor.
5. Open the **Preview** or **Changes** tab and review the exact lines you changed.
6. Click **Commit changes...**.
7. Enter a short description, such as `Add a new publication`.
8. Select **Create a new branch for this commit and start a pull request**.
9. Create the pull request, review the **Files changed** tab, and merge it when everything looks correct.
10. After the pull request is merged, open the repository's **Actions** tab. The workflow named **Deploy website to GitHub Pages** should complete successfully.

GitHub Pages normally updates within a few minutes. If the old version is still visible, refresh the website with `Ctrl + F5`.

## 2. Where each type of content is stored

| Website content | File to edit | Important behavior |
| --- | --- | --- |
| News | [`app/data/news.ts`](app/data/news.ts) | Keep newest items first. The first three items also appear automatically on the homepage. |
| Current and former members | [`app/data/people.ts`](app/data/people.ts) | Photo paths must match files in `public/images/people/`. |
| Publications | [`app/data/publications.ts`](app/data/publications.ts) | Keep entries under the correct year and preserve the surrounding quotation marks and commas. |
| Research areas | [`app/data/research.ts`](app/data/research.ts) | Each topic contains its text, figure, alternative text, and references. |
| Datasets | [`app/data/datasets.tsx`](app/data/datasets.tsx) | This file contains formatted text and is more sensitive to punctuation and brackets. |
| Homepage text and sections | [`app/page.tsx`](app/page.tsx) | Edit only when changing the homepage layout or introductory wording. |
| Contact information | [`app/contact/page.tsx`](app/contact/page.tsx) | Update the displayed email address, office information, or contact wording here. |

For routine updates, copy an existing entry of the same type and change its contents. This is safer than writing a new entry from scratch.

## 3. Adding a news item

Open [`app/data/news.ts`](app/data/news.ts) and add the new item immediately after `export const posts = [` so that the newest item appears first.

### News item with a link

```ts
{
  date: "2026.09",
  text: "A short factual description of the news item.",
  href: "https://doi.org/10.xxxx/example",
  linkLabel: "Read the paper",
  emphasis: ["Journal Name"],
},
```

The words in `emphasis` must appear exactly the same way in `text`. They will be displayed in italics on the News page.

### News item with a photograph

```ts
{
  date: "2026.09",
  text: "A short factual description of the news item.",
  image: "/images/news/example-photo.jpg",
  imageAlt: "A concise description of the people and event shown in the photograph",
},
```

The homepage automatically shows the first three entries from this file. No separate homepage edit is needed.

## 4. Updating group members

Open [`app/data/people.ts`](app/data/people.ts).

### Member with a photograph

```ts
{
  name: "Student Name",
  role: "Ph.D. student · 2026–",
  image: "/images/people/student-name.jpg",
},
```

### Member without a photograph

```ts
{
  name: "Student Name",
  role: "Master’s student · 2026–",
  initials: "SN",
},
```

When a member leaves the group, remove the entry from `members` and add an entry to `formerMembers`:

```ts
{
  name: "Former Member",
  roleAndPeriod: "Ph.D. student · 2021–2026",
  currentPosition: "Postdoctoral fellow, University Name",
},
```

Use these role labels consistently:

- `Ph.D. student`
- `Master’s student`
- `Postdoctoral fellow`
- `Visiting scholar`

## 5. Adding a publication

Open [`app/data/publications.ts`](app/data/publications.ts). The file has three main sections:

- `inPreparation`
- `inReview`
- `peerReviewed`

Each publication is one quoted text entry followed by a comma:

```ts
"Author, A., Author, B., & Liu, P.* (2026). Article title. Journal Name, volume(issue), pages. https://doi.org/xx.xxxx/example",
```

For a peer-reviewed paper:

1. Find the appropriate year inside `peerReviewed`.
2. Add the citation directly below the year, placing newer publications above older publications from the same year.
3. Include a DOI link whenever one is available.
4. Use `*` after the corresponding author's name.

To start a new year, add the year as a separate entry before its publications:

```ts
"2027",
"First citation for 2027...",
```

The Publications page search and year navigation update automatically.

### Adding a news or media link to a publication

Add an entry to `supplementalLinks` near the bottom of the same file:

```ts
{
  citationIncludes: "A unique portion of the article title",
  label: "[Georgia Tech News]",
  href: "https://example.com/news-story",
},
```

Then add the same label, such as `[Georgia Tech News]`, at the end of the publication citation.

## 6. Uploading or replacing an image

Use the appropriate folder:

- People: `public/images/people/`
- News: `public/images/news/`
- Research: `public/images/research/`
- Datasets: `public/images/datasets/`
- Homepage: `public/images/home/`

To upload through GitHub:

1. Open the destination folder in the repository.
2. Click **Add file** and then **Upload files**.
3. Upload the image and commit it to the same branch used for the related content change.
4. Reference the file without the word `public`. For example:

```ts
image: "/images/people/student-name.jpg",
```

Image recommendations:

- Use lowercase filenames with hyphens and no spaces, for example `student-name.jpg`.
- Use `.jpg` for photographs and `.png` for diagrams with text or sharp lines.
- Use a clear, high-resolution original, but avoid unnecessarily large files.
- Write useful `imageAlt` or `alt` text describing the image for accessibility.
- When replacing an existing photo with the same filename, a hard refresh may be needed before the new version appears.

## 7. Editing research areas or datasets

Research and dataset entries contain longer text, links, figures, and nested brackets. The safest method is to copy a complete existing entry and then replace its contents.

Check all of the following before committing:

- Every opening `{`, `[`, and `(` has a matching closing character.
- Every text value remains inside straight quotation marks: `"text"`.
- A comma remains between consecutive items.
- DOI and external links begin with `https://`.
- Image paths begin with `/images/`.
- Reference labels and URLs remain paired.

For substantial layout changes or a new kind of dataset component, use Codex or make the change locally so that the website can be built and checked before merging.

## 8. Common syntax mistakes

Most deployment failures after a content edit come from a missing comma, quotation mark, or closing bracket.

### Correct

```ts
{
  name: "Student Name",
  role: "Ph.D. student · 2026–",
},
```

### Incorrect: missing comma

```ts
{
  name: "Student Name"
  role: "Ph.D. student · 2026–",
},
```

Also remember:

- Use straight quotation marks (`"`) around code values. Curly quotation marks may be used inside the text itself.
- If the text itself must contain a straight quotation mark, write it as `\"`.
- Do not remove `export const`, array brackets, or section names.
- Do not paste Microsoft Word formatting into the code editor.

## 9. Confirming that the update was published

After merging the pull request:

1. Open **Actions** in the repository.
2. Open the newest **Deploy website to GitHub Pages** run.
3. Wait until both the `build` and `deploy` jobs have green check marks.
4. Open the [published website](https://pengfeiliu371.github.io/aerosol-climate-health-lab-website/) and check the edited page.
5. Use `Ctrl + F5` if the browser still shows the older version.

## 10. Recovering from a mistake

If the deployment fails:

1. Open the failed workflow in **Actions** and read the first red error message in the `build` job.
2. Reopen the edited file and compare it with the nearest working entry.
3. Correct missing commas, quotation marks, or brackets and commit the fix.

If incorrect content was merged but the build succeeded, open the merged pull request and use **Revert** when available. Alternatively, edit the data file again and restore the previous text from the file's **History** view.

The last successful GitHub Pages deployment generally remains available while a failed update is being corrected.
