import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-stats`
 * 
 * @demo index.html
 * @element titans-website-stats
 */
export class TitansWebsiteStats extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-stats";
  }

  static get styles() {
    return [
        super.styles,
        css`
        :host {
            display: block;
        }  

        footer {
            color: white;
            border-radius: 18px;
            padding: 24px;
            text-align: center;
        }

        .main {
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .sub {
            font-size: 8px;
            font-weight: 400;
        }
        `,
    ];
}

render() {
    return html`
        <footer>
            <div class="main">Main Content</div>
            <div class="sub">Sub Content</div>
        </footer>
    `;
}
}

globalThis.customElements.define(TitansWebsiteStats.tag, TitansWebsiteStats);