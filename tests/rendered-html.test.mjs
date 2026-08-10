import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server renders the production home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Aerosol, Climate &amp; Health Laboratory \| Georgia Tech<\/title>/i,
  );
  assert.match(html, /Aerosol processes/);
  assert.match(html, /School of Earth and Atmospheric Sciences/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("research page links to Open PM Network", async () => {
  const response = await render("/research");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Open PM Network/);
  assert.match(
    html,
    /href="https:\/\/www\.openpmnetwork\.org"[^>]*target="_blank"[^>]*rel="noreferrer"/i,
  );
  assert.match(html, /Open Research Infrastructure/i);
});
