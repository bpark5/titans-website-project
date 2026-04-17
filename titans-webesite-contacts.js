import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-contacts`
 * 
 * @demo index.html
 * @element titans-website-contacts
 */
export class TitansWebsiteContacts extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-contacts";
  }

  static get styles() {
    return [
        super.styles,
        css`
        :host {
            display: block;
        }

        .contact-card {
            background: white;
            border-radius: 8px;
            padding: 24px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: grid;
            gap: 12px;
        }

        .row {
            font-size: 12px;
            color: white;

        }

        .label {
            font-weight: 700;
            color: black;
            margin-right: 8px;
        }
        `,
    ];
}

render() {
    return html`
        <div class="contact-card">
            <div class="row">
                <span class="label">Name:</span>
                <span>John Doe</span>
            </div>
            <div class="row">
                <span class="label">Email:</span>
                <span>john.doe@example.com</span>
            </div>
            <div class="row">
                <span class="label">Phone:</span>
                <span>+1 234 567 890</span>
            </div>
        </div>
    `;
}
}

globalThis.customElements.define(TitansWebsiteContacts.tag, TitansWebsiteContacts);
