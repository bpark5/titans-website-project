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
            gap: var(--ddd-spacing-5);
        }

        .buttons button {
            background-color: light-dark(var(--ddd-theme-default-white),var(--ddd-theme-default-beaverBlue));
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            font-size: var(--ddd-font-size-ml);
            cursor: pointer;
        }

        .roster-button:hover .roster-button:focus{
            opacity: 0.8;
            cursor: pointer;
        }

        .dropdown-button {
            position: relative;
        }

        .schedule-dropdown, .about-dropdown {
            display: none;
            position: absolute;
            background: white;
            max-width: 90%;
            z-index: 100;
        }

        .dropdown-button:hover .schedule-dropdown,
        .dropdown-button:focus-within .schedule-dropdown,
        .dropdown-button:hover .about-dropdown,
        .dropdown-button:focus-within .about-dropdown {
            display: flex;
            flex-direction: column;
        }

        .schedule-dropdown a, .about-dropdown a {
            font-size: var(--ddd-font-size-3xs);
            padding: var(--ddd-spacing-2);
            color: var(--ddd-theme-default-beaverBlue);
            border: var(--ddd-border-xs);
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
                <div class="dropdown-button">
                    <button class="schedule-button">Schedule</button>
                    <div class="schedule-dropdown">
                        <a href="/schedule">Schedule Page</a>
                        <a href="/schedule/games">Games</a>
                        <a href="/schedule/practice">Practice</a>
                    </div>
                </div>
                <button class="roster-button" @click=${() => window.location.href = '/roster'}>Roster</button>
                <div class="dropdown-button">
                    <button class="about-button">About</button>
                    <div class="about-dropdown">
                        <a href="/about">About Page</a>
                        <a href="/about/contact">Contact</a>
                    </div>
                </div>
                
            </div>
        </div>

        `;
    }

}

globalThis.customElements.define(TitansWebsiteNavBar.tag, TitansWebsiteNavBar);