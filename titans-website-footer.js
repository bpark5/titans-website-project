import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-stats`
 * 
 * @demo index.html
 * @element titans-website-footer
 */
export class TitansWebsiteFooter extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-footer";
  }

  static get styles() {
    return [
        super.styles,
        css`
        :host {
            display: block;
        }  

        footer {
            background: #4b92db;
            color: white;
            border-radius: 18px;
            padding: 24px;
            text-align: center;
            margin-top: 32px;
        }

        .main {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .sub {
            font-size: 12px;
            font-weight: 400;
            opacity: 0.8;
        }
        `,
    ];
}

render() {
    return html`
        <footer>
            <div class="main">Timber Titans Website</div>
            <div class="sub">Copyright © 2023 Timber Titans. All rights reserved.</div>
        </footer>
    `;
}
}

globalThis.customElements.define(TitansWebsiteFooter.tag, TitansWebsiteFooter);