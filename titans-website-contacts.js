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
            background: var(--ddd-theme-default-white);
            border-radius: var(--ddd-radius-sm);
            padding: var(--ddd-spacing-6);
            display: grid;
            gap: var(--ddd-spacing-4);
        }

        .row {
            font-size: var(--ddd-font-size-4xs);
            color: var(--ddd-theme-default-info);

        }

        .label {
            font-weight: 700;
            color: var(--ddd-theme-default-info);
            margin-right: var(--ddd-spacing-2);
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
