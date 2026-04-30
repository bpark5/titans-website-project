/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./titans-website-nav-bar.js";
import "./titans-website-play-list.js";
import "./titans-website-play-list-slide.js";
import "./titans-website-slide-arrow.js";
import "./titans-website-schedule.js";
import "./titans-website-weekly-schedule.js";
import "./titans-website-pics.js";
import "./titans-website-stats.js";
import "./titans-website-socials.js";
import "./titans-website-contacts.js";
import "./titans-website-footer.js";
import "./titans-website-about.js";
import "./titans-website-dropdown-contacts.js";
import "./titans-wbesite-roster.js";

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
        .page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }

        .section-card {
          background: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
          padding: var(--ddd-spacing-5);
        }

        .section-title {
          font-size: var(--ddd-font-size-m);
          font-weight: 700;
          padding-bottom: var(--ddd-spacing-3);
          color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));
          border-left: var(--ddd-border-lg);
          border-color: var(--ddd-theme-default-accent);
          padding-left: var(--ddd-spacing-2);
          padding-bottom: var(--ddd-spacing-1);
          margin-bottom: var(--ddd-spacing-2);
        }

      `,
    ];
  }

  

  render() {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("page");
    if (path === "about") {
      return html`
        <titans-website-about></titans-website-about>
      `;
    }
    if (path === "contact") {
      return html`
        <titans-website-dropdown-contacts></titans-website-dropdown-contacts>
        <titans-website-weekly-schedule></titans-website-weekly-schedule>
        <titans-website-footer></titans-website-footer>
      `;
    }
      if (path === "schedule") {
      return html `
        <titans-website-nav-bar logoSrc="./images/Team-logo.png"></titans-website-nav-bar>
        <titans-website-schedule></titans-website-schedule>
        <titans-website-weekly-schedule></titans-website-weekly-schedule>
        <titans-website-footer></titans-website-footer>
      `;
    }
    if (path === "roster") {
      return html `
        <titans-website-roster></titans-website-roster>
        
      `;
    }
    
    return html`
    <div class="wrapper">
        <titans-website-nav-bar 
          logoSrc="./images/Team-logo.png">
        </titans-website-nav-bar>
        <titans-website-play-list>
          <titans-website-play-list-slide slideImage="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRIiww5ye8cvdDtVB1SJC8Lp7TL8nxBSlaTvCMTxkhm8afn5fVAPWYEZb3D6xNUkuds07FPw2lkCuCSa-Q"></titans-website-play-list-slide>
          <titans-website-play-list-slide slideImage="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/03/1200/675/paul-skenes-opening-day-1.jpg?ve=1&tl=1"></titans-website-play-list-slide>
        </titans-website-play-list>
        <titans-website-weekly-schedule></titans-website-weekly-schedule>
          <div class="section">
            <div class="section-card">
              <div class="section-title">Team Highlights</div>
            <titans-website-pics></titans-website-pics>
          </div>
        </div>
        <div class="section">
          <div class="section-card">
            <div class="section-title">Team Stats</div>
              <titans-website-stats></titans-website-stats>
            </div>
          </div>
        <div class="section">
          <div class="section-card">
            <div class="section-title">Connect with Us</div>
        <titans-website-socials></titans-website-socials>
        <titans-website-contacts></titans-website-contacts>
        </div>
        </div>
    </div>
     <titans-website-footer></titans-website-footer>
     `;
  }
}

globalThis.customElements.define(TitansWebsiteProject.tag, TitansWebsiteProject);