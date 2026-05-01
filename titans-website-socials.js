import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-socials`
 * 
 * @demo index.html
 * @element titans-website-socials
 */
export class TitansWebsiteSocials extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-socials";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }


  constructor() {
    super();
    this.socials = [
      { label: "Facebook", url: "https://www.facebook.com" },
      { label: "Twitter", url: "https://www.twitter.com" },
      { label: "Instagram", url: "https://www.instagram.com" }
    ];
  }

  static get styles() {
    return [
      super.styles,
      css`
      :host {
          display: block;
      }
      .socials {
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-4);
          justify-content: flex-start;
          align-items: center;
          padding-bottom: var(--ddd-spacing-4);
      }

      .socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          text-decoration: none;
          background: var(--ddd-theme-default-accent);
          color: var(--ddd-theme-default-info);
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-rounded);
          font-weight: var(--ddd-font-weight-bold);
          transition: 0.2s ease;
          min-width: 140px;
        }

    .socials a:hover {
          background-color: var(--ddd-theme-default-info);
          color: var(--ddd-theme-default-shrineLight);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="socials">
        ${this.socials.map(
          (social) => html`<a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.label}</a>`
        )}
      </div>
    `;
  }

}
customElements.define(TitansWebsiteSocials.tag, TitansWebsiteSocials);

