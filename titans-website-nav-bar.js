/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
*/
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-nav-bar`
 * 
 * @demo index.html
 * @element titans-website-nav-bar
 */
export class TitansWebsiteNavBar extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return "titans-website-nav-bar";
    }

    constructor() {
        super();
        this.logoSrc = "";
        this.logoDescription = "Team logo";
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            logoSrc: {type: String},
            logoDescription: {type: String},
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
        }

        .logo-section {
            display: flex;
            align-items: center;
        }
        
        .logo-section img {
            display: block;
            max-width: 100px;
            padding: var(--ddd-spacing-3);
        }

        .buttons {
            display: flex;
            align-items: center;
            padding: var(--ddd-spacing-2);
            margin-right: var(--ddd-spacing-5);
            gap: 16px;
        }

        .buttons button {
            background-color: light-dark(var(--ddd-theme-default-white),var(--ddd-theme-default-beaverBlue));
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            font: var(--ddd-font-size-s);
        }

        .schedule-button:hover, .roster-button:hover, .about-button:hover, .schedule-button:focus, .roster-button:focus, .about-button:focus {
            opacity: 0.8;
            cursor: pointer;
        }
    `];
    }

    render() {
        return html`
        <div class="header">
            <div class="logo-section">
                <img src=${this.logoSrc} alt=${this.logoDescription} />
            </div>
            <div class="buttons">
                <button class="schedule-button" @click=${() => window.location.href = '/schedule'}>Schedule</button>
                <button class="roster-button" @click=${() => window.location.href = '/play-list'}>Roster</button>
                <button class="about-button" @click=${() => window.location.href = '/contact'}>About</button>
            </div>
        </div>

        `;
    }

}

globalThis.customElements.define(TitansWebsiteNavBar.tag, TitansWebsiteNavBar);