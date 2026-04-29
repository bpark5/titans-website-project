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
            email: "brandon.park@titans.com",
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
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
        }
        h1 {
            font-size: var(--ddd-font-size-l);
            margin-bottom: var(--ddd-spacing-3);
            color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));;
        }
        .subtitle {
            font-size: var(--ddd-font-xxs);
            margin-bottom: var(--ddd-spacing-5);
            color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));;
        }
        .contact-grid {
            display: flex;
            justify-content: center;
            gap: var(--ddd-spacing-5);
            flex-wrap: wrap;
            padding-top: var(--ddd-spacing-6);
            
        }
        .contact-card {
            background: var(--ddd-theme-default-shrineLight);
            color: var(--ddd-theme-default-beaverBlue);
            width: 320px;
            padding: var(--ddd-spacing-4);
            border-radius: var(--ddd-radius-lg);
            box-shadow: var(--ddd-shadow-md);
            text-align: center;
        }
        .contact-card h2 {
            font-size: var(--ddd-font-size-ms);
            margin-bottom: var(--ddd-spacing-2);
        }
        .role {
            font-weight: 700;
            margin-bottom: var(--ddd-spacing-2);
        }
        .contact-info {
            font-size: var(--ddd-font-size-4);
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
                font-size: var(--ddd-spacing-m);
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
            logoSrc="./images/Team-logo.png"   
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
        </div>
    `;
  }
}

globalThis.customElements.define(TitansWebsiteDropdownContacts.tag, TitansWebsiteDropdownContacts);