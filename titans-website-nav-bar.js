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
        this.menuOpen = false;
        this.menuItems = [];
        this.activeMenu = null;
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            logoSrc: {type: String},
            logoDescription: {type: String},
            menuOpen: {type: Boolean},
            menuItems: {type: Array},
            activeMenu: {type: String}
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
            background-color: var(--ddd-theme-default-beaverBlue);
            display: flex;
            align-items: center;
            padding: var(--ddd-spacing-5);
            position: relative;
        }
        
        .logo-section img {
            display: block;
            max-width: 200px;
            padding-top: var(--ddd-spacing-2);
        }

        .buttons {
            display: flex;
            align-items: center;
            padding: var(--ddd-spacing-2);
            margin-right: var(--ddd-spacing-5);
            gap: var(--ddd-spacing-5);
        }

        .buttons button {
            color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            font-size: var(--ddd-font-size-ml);
            cursor: pointer;
            max-width: 100%;
            box-sizing: border-box;
        }

        .roster-button:hover .roster-button:focus{
            opacity: 0.8;
            cursor: pointer;
        }

        .dropdown-button {
            position: relative;
        }

        .dropdown-menu {
            display: none;
            position: absolute;
            background: var(--ddd-theme-default-shrineLight);
            min-width: 100%;
            z-index: 100;
        }

        .dropdown-button:hover .dropdown-menu,
        .dropdown-button:focus-within .dropdown-menu {
            display: flex;
            flex-direction: column;
        }

        .dropdown-menu a {
            font-size: var(--ddd-font-size-3xs);
            padding: var(--ddd-spacing-2);
            color: var(--ddd-theme-default-beaverBlue);
            border: var(--ddd-border-xs);
            text-decoration: none;
        }

        .dropdown-menu a:hover {
            cursor: pointer;
            background-color: var(--ddd-theme-default-limestoneLight);
            text-decoration: underline;
        }

        .smaller-screen-menu {
            display: none;
        }

        @media (max-width: 700px) {

            .smaller-screen-menu {
                display: block;
                background: none;
                border: none;
                color: var(--ddd-theme-default-shrineLight);
                font-size: var(--ddd-font-size-ml);
                cursor: pointer;
            }

            .buttons {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: var(--ddd-spacing-0);
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                height: auto;
                background-color: var(--ddd-theme-default-beaverBlue);
                padding: var(--ddd-spacing-5);
                gap: var(--ddd-spacing-3);
                overflow-y: auto;
                z-index: 100;
            }

            .dropdown-button {
                width: 100%;
            }

             .dropdown-button button {
                color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));
                background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
                width: 100%;
                font-size: var(--ddd-font-size-xs);
                padding: var(--ddd-spacing-5);
                text-align: left;
                border-radius: var(--ddd-radius-sm);
            }

            .dropdown-button:hover .dropdown-menu,
            .dropdown-button:focus-within .dropdown-menu {
                display: none;
            }

            .dropdown-button.active .dropdown-menu {
                display: flex;
                flex-direction: column;
            }

            .buttons.open {
                display: flex;
            }

            .dropdown-menu {
                position: static;
                display: none;
                flex-direction: column;
                width: 100%;
                background: var(--ddd-theme-default-shrineLight);
            }


            .dropdown-menu a {
                font-size: var(--ddd-font-size-3xs);
                padding: var(--ddd-spacing-4);
                border-bottom: var(--ddd-border-xs);
            }
        } 
    `];
    }

    render() {
        const menuButtons = [];
        for (const item of this.menuItems) {
            const children = [];
            for (const child of item.children) {
                children.push(html`<a href="/?page=${child.slug}">${child.title}</a>`);
            }
            menuButtons.push(html`
                <div class="dropdown-button ${this.activeMenu === item.id ? 'active' : ''}">
                    <button @click=${() => this._toggleDropdown(item.id)}>${item.title}</button>
                    <div class="dropdown-menu">
                        ${children}
                    </div>
                </div>
            `);
        }

        return html`
        <div class="header">
            <div class="logo-section">
                <a href="/?page=home">
                    <img src=${this.logoSrc} alt=${this.logoDescription} />
                </a>
            </div>
            <button class="smaller-screen-menu" @click=${this._toggleMenu}>☰</button>
            <div class="buttons ${this.menuOpen ? "open" : ""}">
                ${menuButtons}
            </div>
        </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        fetch("/api/menu").then (res => res.json()).then (data => {
            this.menuItems = data.items;
        });
    }

    _toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    _toggleDropdown(id) {
        this.activeMenu = this.activeMenu === id ? null : id;
    }

}

globalThis.customElements.define(TitansWebsiteNavBar.tag, TitansWebsiteNavBar);