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


        .slide-image {
            padding: var(--ddd-spacing-5);
            padding-top: var(--ddd-spacing-10);

            display: flex;
            justify-content: center;
        }
        .slide-image img {
            display: block;
            width: 92%;
            height: 92%;
            object-fit: contain;
            object-position: center;
            margin-left: auto;
            margin-right: auto;
            border:  var(--ddd-border-md);
            border-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-accent));
            border-radius: var(--ddd-radius-lg);
            overflow: hidden;
            border: none;
        }
        .image-frame {
            width: 600px;
            height: 350px;
            display: flex;
            justify-content: center;
            align-items: center;
            border:  var(--ddd-border-md);
            border-color: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-accent));
            
            border-radius: var(--ddd-radius-sm);
            background: light-dark(var(--ddd-theme-default-nittanyNavy), var(--ddd-theme-default-accent));
        }
        @media (max-width: 700px) {
            .slide-image img {
                width: 95%;
                height: 260px;
            }
        }

    `];
    }

    render() {
        return html `
        <div class="slide-image">
            <div class="image-frame">
            <img src=${this.slideImage} alt=${this.imageDescription} loading="lazy">
        </div>
        </div>
        `;
    }

}

globalThis.customElements.define(TitansWebsitePlayListSlide.tag,TitansWebsitePlayListSlide);