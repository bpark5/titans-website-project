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

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
        }

        .day {
            border: 1px solid rgb(204, 204, 204);
            padding: 8px;
            min-height: 80px;
            background-color: var(--ddd-var-default-white);
            position: relative;
        }
      
    `];
    }

    render() {
        return html`
        <div class="calendar-wrapper">
            <div class="calendar-header">
                <button class="prev-month"> Previous month</button>
                <span class="date">April 2026</span>
                <button class="next-month">Next month</button>
            </div>
            <div class="calendar-grid">
                <div class="day">
                    <span class="day-number">1</span>
                </div>
                <div class="day">
                    <span class="day-number">2</span>
                </div>
                <div class="day">
                    <span class="day-number">3</span>
                </div>
                <div class="day">
                    <span class="day-number">4</span>
                </div>
                <div class="day">
                    <span class="day-number">5</span>
                </div>
                <div class="day">
                    <span class="day-number">6</span>
                </div>
                <div class="day">
                    <span class="day-number">7</span>
                </div>
                <div class="day">
                    <span class="day-number">8</span>
                </div>

            </div>
        </div>
        

        
        `;
    }

}

globalThis.customElements.define(TitansWebsiteSchedule.tag, TitansWebsiteSchedule);