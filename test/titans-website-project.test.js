import { html, fixture, expect } from '@open-wc/testing';
import "../titans-website-project.js";

describe("TitansWebsiteProject test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <titans-website-project
        title="title"
      ></titans-website-project>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
