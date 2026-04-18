/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-websiteplay-list-slide`
 * 
 * @demo index.html
 * @element titans-website-play-list-slide
 */
export class TitansWebsitePlayListSlide extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
        return "titans-website-play-list-slide";
    }

    constructor() {
        super();
        this.active = false;
        this.slideImage = "";
        this.imageDescription = "";
    }

    static get properties() {
    return {
        ...super.properties,
        active: { type: Boolean, reflect: true },
        slideImage: {type: String},
        imageDescription: {type: String}
        };
    }

    static get styles() {
    return [super.styles,
    css`
      :host {
            display: block;
        }
        :host([active])
        {
            display: block;
        }

        :host(:not([active]))
        {
            display: none;
        }

        .slide-image img {
            display: block;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            padding: var(--ddd-spacing-5);
            padding-top: var(--ddd-spacing-10);
        }

    `];
    }

    render() {
        return html `
        <div class="slide-image">
            <img src=${this.slideImage} alt=${this.imageDescription} loading="lazy">
        </div>`;
    }

}

globalThis.customElements.define(TitansWebsitePlayListSlide.tag,TitansWebsitePlayListSlide);