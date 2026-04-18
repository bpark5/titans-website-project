/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./titans-website-profile-picture.js";
import "./titans-website-nav-bar.js";
import "./titans-website-play-list.js";
import "./titans-website-pics.js";
import "./titans-website-stats.js";
import "./titans-webesite-socials.js";
import "./titans-webesite-contacts.js";
//import "./titans-website-footer.js";

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
        <titans-website-profile-picture username="Default"></titans-website-profile-picture>
        <titans-website-nav-bar 
          logoSrc="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/stkdr5z7zbasmrhtotmt"> //placeholder for right now
        </titans-website-nav-bar>
        <titans-website-play-list>
          <titans-website-play-list-slide slideImage="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/stkdr5z7zbasmrhtotmt"></titans-website-play-list-slide>
          <titans-website-play-list-slide slideImage="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/03/1200/675/paul-skenes-opening-day-1.jpg?ve=1&tl=1"></titans-website-play-list-slide>
        </titans-website-play-list>
    </div>`;
  }
}

globalThis.customElements.define(TitansWebsiteProject.tag, TitansWebsiteProject);