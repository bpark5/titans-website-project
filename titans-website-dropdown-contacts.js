import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./titans-website-nav-bar.js";
import "./titans-website-footer.js";
/**
 * `titans-website-dropdown-contacts`
 * 
 * @demo index.html
 * @element titans-website-dropdown-contacts
 */
export class TitansWebsiteDropdownContacts extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-dropdown-contacts";
  }

  constructor() {
    super();
    this.contacts = [
        {
            name: "Chris",
            role: "Head Coach",
            email: "chris.higgins@titans.com",
            phone: "555-123-4567"
        },
        {
            name: "Brandon",
            role: "Head Coach",
            email: "brandon.Park@titans.com",
            phone: "555-987-6543"
        },
    ];
  }

  static get styles() {
    return [
        super.styles,
        css`
        :host {
            display: block;
            min-height: 100px;
            background: var(--ddd-theme-default-nittanyNavy);
            color: var(--ddd-theme-default-white);
        }
        .page {
            min-height: 70px;
            padding: var(--ddd-spacing-5);
        }
        h1 {
            font-size: 40px;
            margin-bottom: var(--ddd-spacing-3);
        }
        .subtitle {
            font-size: 20px;
            margin-bottom: var(--ddd-spacing-5);
        }
        .contact-grid {
            display: flex;
            justify-content: center;
            gap: var(--ddd-spacing-5);
            flex-wrap: wrap;
        }
        .contact-card {
            background: var(--ddd-theme-default-white);
            color: var(--ddd-theme-default-beaverBlue);
            width: 320px;
            padding: var(--ddd-spacing-4);
            border-radius: var(--ddd-radius-lg);
            box-shadow: var(--ddd-shadow-md);
            text-align: center;
        }
        .contact-card h2 {
            font-size: 28px;
            margin-bottom: var(--ddd-spacing-2);
        }
        .role {
            font-weight: 700;
            margin-bottom: var(--ddd-spacing-2);
        }
        .contact-info {
            font-size: 16px;
            margin-bottom: var(--ddd-spacing-1);
        }
        a {
            color: var(--ddd-theme-default-beaverBlue);
            text-decoration: none;
            font-weight: 700;
        }
        a:hover {
            text-decoration: underline;
        }
        @media (max-width: 700px) {
            .page {
                padding: var(--ddd-spacing-3);
            }
            h1 {
                font-size: 32px;
            }
            .contact-card {
                width: 100%;
                max-width: 320px;
            }
        }
    `];
  }

  render() {
    return html`
         <titans-website-nav-bar
            logoSrc="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjllNjM1MjI4Mjg4ODE5MTk3Y2IyYTg5ZGIyYjdmOWI6ZmlsZV8wMDAwMDAwMDk2OTA3MWY4YTZkYjU0MTU4YjJmMjk2OSIsInRzIjoiMjA1NjMiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImE4Yzc0MWNhMjQyNjM5NGI2YmYzNDc5NzZjZmY5MDgwZTI2ODgwOGU5MWY5MzZmMzJmNDA5OTFiYWJjODczNjIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9"   
            logoDescription="Penn State Athletics logo">
        </titans-website-nav-bar>
        <div class="page">
            <h1>Contact Us</h1>
            <div class="subtitle">Have questions? Reach out to our coaches!</div>
            <div class="contact-grid">
                ${this.contacts.map(contact => html`
                    <div class="contact-card">
                        <h2>${contact.name}</h2>
                        <div class="role">${contact.role}</div>
                        <div class="contact-info">
                            <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
                            <p>Phone: <a href="tel:${contact.phone}">${contact.phone}</a></p>
                        </div>
                    </div>
                `)}
            </div>
            <titans-website-footer></titans-website-footer>
        </div>
    `;
  }
}

globalThis.customElements.define(TitansWebsiteDropdownContacts.tag, TitansWebsiteDropdownContacts);