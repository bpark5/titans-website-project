/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
*/
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./titans-website-play-list-slide.js";
import "./titans-website-slide-arrow.js";

/**
 * `titans-website-play-list`
 * 
 * @demo index.html
 * @element titans-website-play-list
 */
export class TitansWebsitePlayList extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return "titans-website-play-list";
    }

    constructor() {
        super();
        this.currentIndex = 0;
        this.totalSlides = 0;
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            currentIndex: {type: Number},
            totalSlides: {type:Number}
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }

        .wrapper {
            position: relative;
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy))
        }
      
    `];
    }

    firstUpdated() {
        this.slides = Array.from(this.querySelectorAll("titans-website-play-list-slide"));
        this.totalSlides = this.slides.length;
        this._updateSlides()
    }

    _updateSlides() {
    this.slides.forEach((slide, i) => slide.active = (i === this.currentIndex));  
        const indexChange = new CustomEvent("play-list-index-changed", {
        composed: true,
        bubbles: true,
        detail: {
            index: this.currentIndex
        },
        });
        this.dispatchEvent(indexChange);
    };

    nextSlide() {
        if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex ++;
        }
        this._updateSlides();
    }

    previousSlide() {
        if (this.currentIndex > 0) {
        this.currentIndex--;
        }
        this._updateSlides();
    }

    handleEvent(e) {
        this.currentIndex = e.detail.index;
        this._updateSlides();
    }

    render() {
        return html` 
        <div class="wrapper">
            <slide-arrow 
                .currentIndex=${this.currentIndex}
                .totalSlides=${this.totalSlides}
                @previous-slide="${this.previousSlide}"   
                @next-slide="${this.nextSlide}">   
            </slide-arrow>
            <slot></slot>
        </div>
      `;
    }

}

globalThis.customElements.define(TitansWebsitePlayList.tag, TitansWebsitePlayList);