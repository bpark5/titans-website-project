import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./titans-website-nav-bar.js";
import "./titans-website-footer.js";
/**
 * `titans-website-about`
 * 
 * @demo index.html
 * @element titans-website-about
 */
export class TitansWebsiteAbout extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return "titans-website-about";
    }
    constructor() {
            super();
            this.teamPhoto = "./images/team-photo.png";
        }

    static get properties() {
        return {
            ...super.properties,
            teamPhoto: { type: String },
        };
    }
    static get styles() {
    return [
        super.styles,
    css`
        :host {
            display:block;
            min-height: 100px;
            background-color: var(--ddd-theme-default-nittanyNavy);
            color: var(--ddd-theme-default-white);

        }
        .content {
            padding: var(--ddd-spacing-5);
        }

        .section-title {
            font-size: 1.5em;
            font-weight: bold;
            margin-bottom: var(--ddd-spacing-3);
        }

        .about-section {
            font-size: 1.2rem;
            line-height: 1.5;
            margin-bottom: var(--ddd-spacing-5);
        }

        .image-wrapper {
            display: flex;
            justify-content: center;
            margin-bottom: var(--ddd-spacing-5);
        }

        .image-wrapper img {
            width: 100%;
            max-width: 400px;
            border-radius: 12px;
            border: 4px solid var(--ddd-theme-default-white);
            display: block;
        }

        .info-block {
            margin-top: var(--ddd-spacing-5);
        }

        .info-block h2 {
            font-size: 1.5rem;
            margin-bottom: var(--ddd-spacing-2);
        }
        .info-block p {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: var(--ddd-spacing-3);
            color: var(--ddd-theme-default-white);
        }
        titans-website-footer {
            display: block;
            margin-top: var(--ddd-spacing-5);
        }
    `,
    ];
    }
    render() {
        return html`
        <titans-website-nav-bar logoSrc="./images/Team-logo.png"></titans-website-nav-bar>
        <div class="content">
            <h1 class="section-title">About Us</h1>
            <p class="about-section">The Titans are a youth baseball team based in State College, Pennsylvania. We are dedicated to fostering a love for the game of baseball while promoting teamwork, sportsmanship, and personal growth among our players. Our team is made up of talented and passionate young athletes who are committed to improving their skills and competing at a high level.</p>

            <div class="image-wrapper">
                <img src="./images/team-photo.png" alt="Team photo of the Titans baseball team
                "/>
            </div>

            <div class="info-block">
                <h2>Our Mission</h2>
                <p>Our mission is to provide a positive and inclusive environment where young athletes can develop their baseball skills, build lasting friendships, and learn valuable life lessons. We strive to create a supportive community that encourages players to reach their full potential both on and off the field.</p>
            </div>
        </div>
        <titans-website-weekly-schedule></titans-website-weekly-schedule>
        <titans-website-footer></titans-website-footer>
        `;
    }
}

globalThis.customElements.define(TitansWebsiteAbout.tag, TitansWebsiteAbout);