/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./titans-website-pics.js";
import "./titans-website-stats.js";
import "./titans-website-socials.js";
import "./titans-website-contacts.js";
import "./titans-website-footer.js";

/**
 * `titans-website-project`
 *
 * @demo index.html
 * @element titans-website-project
 */
export class TitansWebsiteProject extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "titans-website-project";
  }

  constructor() {
    super();
    this.title = "Titans Website";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: #f7f7f7;
          color: #111;
          font-family: Arial, sans-serif;
        }

        .page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }

        .section {
          margin: 32px 0;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #0c2340;
          border-left: 6px solid #4b92db;
          padding-left: 12px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="page">
        <section class="section">
          <div class="section-title">League / Team Pictures</div>
          <titans-website-pics></titans-website-pics>
        </section>

        <section class="section">
          <div class="section-title">Team Stats</div>
          <titans-website-stats></titans-website-stats>
        </section>

        <section class="section">
          <div class="section-title">Team Socials</div>
          <titans-website-socials></titans-website-socials>
        </section>

        <section class="section">
          <div class="section-title">Contact Information</div>
          <titans-website-contacts></titans-website-contacts>
        </section>

        <section class="section">
          <titans-website-footer></titans-website-footer>
        </section>
      </div>
    `;
  }
}

globalThis.customElements.define(TitansWebsiteProject.tag, TitansWebsiteProject);