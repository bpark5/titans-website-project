import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
import { I18NMixin } from '@haxtheweb/i18n-manager/lib/I18NMixin.js';
import "./titans-website-nav-bar.js";
import "./titans-website-footer.js";

export class TitansWebsiteRoster extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return 'titans-website-roster';
    }

    constructor() {
        super();
        this.players = [
            { name: "Billy Bob", position: "Short Stop", image: "./images/player-1.png"},
            { name: "Alejandro Carrea-Diaz", position: "Center Field", image: "./images/player-2.png"},
            { name: "John Tester", position: "Pitcher", image: "./images/player-3.png"},
            { name: "Brandon Park Jr.", position: "Catcher", image: "./images/player-4.png"},

        ];

        this.coaches = [
            { name: "Chris Higgins", role: "Head Coach", image: "./images/coach-chris.png"},
            { name: "Brandon Park", role: "Head Coach", image: "./images/coach-brandon.png"},

        ];
    }

    static get properties() {
        return {
            ...super.properties,
            players: { type: Array },
            coaches: { type: Array }
        };
    }

    static get styles() {
        return [
            super.styles,
            css`
            :host {
                display: block;
                color: var(--ddd-theme-default-nittanyNavy);
                background: var(--ddd-theme-default-white);
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
            h2 {
                font-size: var(--ddd-font-size-m);
                margin: var(--ddd-spacing-6) 0 var(--ddd-spacing-4);
                color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));;
            }
            .roster-grid {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: var(--ddd-spacing-5);
            }
            .person-card {
                width: 250px;
                text-align: center;
            }
            .person-card img {
                width: 100%;
                display: block;
                height: 250px;
                object-fit: contain;
                object-position: center top;
                background: var(--ddd-theme-default-nittanyNavy);
                border-radius: var(--ddd-radius-sm);
            }
            .name {
                font-weight: var(--ddd-font-weight-bold);
                font-size: var(--ddd-font-size-4xs);
                margin-top: var(--ddd-spacing-2);
                color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));;
            }
            .role {
                font-size: var(--ddd-font-size-5);
                font-weight: var(--ddd-font-weight-medium);
                color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));;
            }
            @media (max-width: 700px) {
                .page {
                    padding: var(--ddd-spacing-4);
                }
                .person-card,
                .person-card img {
                    width: 150px;
                }
                .person-card img {
                    height: 150px;
                }
            }
        `,
        ];
    }

    renderPerson(person) {
        return html`
            <div class="person-card">
                <img src="${person.image}" alt="${person.name}" loading="lazy" />
                <div class="name">${person.name}</div>
                <div class="role">${person.role || person.position}</div>
            </div>
        `;
    }

    render() {
        return html`
        <titans-website-nav-bar logoSrc="./images/Team-logo.png"></titans-website-nav-bar>
         
        <div class="page">
            <h1>Meet the Team</h1>
            <div class="subtitle">Get to know the players and coaches who make up our roster.</div>
            <h2>Players</h2>
            <div class="roster-grid">
                ${this.players.map(player => this.renderPerson(player))}
                </div>

                <h2>Coaches</h2>
                <div class="roster-grid">
                    ${this.coaches.map(coach => this.renderPerson(coach))}
                </div>
            </div>
            <titans-website-footer></titans-website-footer>
        `;
    }
}
globalThis.customElements.define(TitansWebsiteRoster.tag, TitansWebsiteRoster);