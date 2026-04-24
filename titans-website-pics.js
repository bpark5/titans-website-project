/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-pics`
 * 
 * @demo index.html
 * @element titans-website-pics
 */
export class TitansWebsitePics extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-pics";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }


  constructor() {
    super();
    this.pictures = [
      {
        title: "Team Photo",
        src: "./images/team-photo.png",
      },
      {
        title: "Pony League",
        src: "https://tse3.mm.bing.net/th/id/OIP.S_QpnpRTuEcUrTaLkVQkHwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        title: "Team Gear",
        src: "./images/team-gear.png",
      },
      {
        title: "Local Division",
        src: "./images/league-logo.png",
      },

    ];
  }

  static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
        width: 100%;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 16px;
        width: 100%;
      }

      .card {
        background: var(--ddd-theme-default-white);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 12px;
        min-width: 0;
      }

      img {
        width: 100%;
        height: 190px;
        object-fit: contain;
        object-position: center;
        background: var(--ddd-theme-default-white);
        border-radius: 12px;
        display: block;
      }

      .label {
        margin-top: 10px;
        font-weight: 700;
        color: #333;
      }

      @media (max-width: 900px) {
        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 500px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
      `,
    ];
  }
  
  render() {
    return html`
      <div class="grid">
        ${this.pictures.map(
          (picture) => html`
            <div class="card">
              <img src="${picture.src}" alt="${picture.title}" />
              <div class="label">${picture.title}</div>
            </div>
          `
        )}
      </div>
    `;
  }
}

globalThis.customElements.define(TitansWebsitePics.tag, TitansWebsitePics);