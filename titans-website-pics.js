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
        src: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjllNjM3YzgyZjBjODE5MWIyYWYwODM4YjZlZTQ0ODQ6ZmlsZV8wMDAwMDAwMDY0OTA3MWZkOWFjYWFhOWY4M2MzMTI0NyIsInRzIjoiMjA1NjMiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImE0MzA4NjU3YjJiNGU4YTIwMWM2MzA2NGQ0MjdlMjExYjkxNjQ5ODJkYzkxNWI1MmJlYmYzZmY1MWI1NmM1ZGUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9",
      },
      {
        title: "Pony League",
        src: "https://tse3.mm.bing.net/th/id/OIP.S_QpnpRTuEcUrTaLkVQkHwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        title: "Team Gear",
        src: "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjllNjM4ODBhZjkwODE5MThjZTE4ODE5ZmFlYjM4Nzc6ZmlsZV8wMDAwMDAwMGExNzA3MWZkYTkxY2IzNDkxNjhlMjMyYSIsInRzIjoiMjA1NjMiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImYzMThhMGVmNDQ0MzQ5ZTg3YzEyZmFhYjk0YzBlOTMzNmE2NjQzOThlZGYxZWM1NWU0Nzk0ZmMyOGZkMDJjZDciLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9",
      },
      {
        title: "Local Division",
        src: "https://chatgpt.com/backend-api/estuary/content?id=file_000000008bf471f884a17dfe138cf06c&ts=493526&p=fs&cid=1&sig=76cdd066ac4971cccaf86a0d3a4359c5cbdc2fed67594fcecf2d07d3d8e92d55&v=0",

      },

    ];
  }

  static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
      }

      .card {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 12px;
      }

      img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;
        display: block;
      }

      .label {
        margin-top: 10px;
        font-weight: 700;
        color: #333;
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