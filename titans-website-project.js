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
    <div class="wrapper">
        <titans-website-profile-picture>
          
        </titans-website-profile-picture>
    </div>`;
  }
}

globalThis.customElements.define(TitansWebsiteProject.tag, TitansWebsiteProject);