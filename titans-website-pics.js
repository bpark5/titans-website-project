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
        title: "YBL",
        src: "https://www.bing.com/ck/a?!&&p=0029a884734c023c8e2bc5d09a01f64d2dd3e3e9720e38d8d6ac29598cd74f81JmltdHM9MTc3NjI5NzYwMA&ptn=3&ver=2&hsh=4&fclid=3841a385-14bf-620e-1b61-b75415bb631c&u=a1L2ltYWdlcy9zZWFyY2g_cT15b3V0aCtiYXNlYmFsbCtsZWFndWUrbG9nbytwaG90byZpZD0wMDRCNjdEQjhCRTk5NTE5NzU0N0NEQUVEQjNENDEyNkZGMEYyMTM1JkZPUk09SVFGUkJB",
      },
      {
        title: "Division",
        src: "https://tse3.mm.bing.net/th/id/OIP.S_QpnpRTuEcUrTaLkVQkHwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        title: "Another Picture",
        src: "https://example.com/another-picture.jpg",
      },
      {
        title: "Yet Another Picture",
        src: "https://example.com/yet-another-picture.jpg",

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