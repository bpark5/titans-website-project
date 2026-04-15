/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
*/
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-schedule`
 * 
 * @demo index.html
 * @element titans-website-schedule
 */
export class TitansWebsiteSchedule extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return "titans-website-schedule";
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }
      
    `];
    }

    render() {
        return html`
        
        `;
    }

}

globalThis.customElements.define(TitansWebsiteSchedule.tag, TitansWebsiteSchedule);