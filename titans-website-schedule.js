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
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            currentMonth: {type: Number},
            currentYear: {type: Number},
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }

        .calendar-wrapper {
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy))
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--ddd-spacing-2);
        }

        .prev-month, .next-month {
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            font-size: var(--ddd-font-size-4xs);
            cursor: pointer;
            margin: var(--ddd-spacing-2);
            color: var(--ddd-theme-default-shrineLight);
        }

        .prev-month:hover, .next-month:hover {
            opacity: 0.8;
        }

        .date {
            color: var(--ddd-theme-default-shrineLight);
            font: var(--ddd-font-primary);
            font-size: var(--ddd-font-size-ms);
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
            background-color: var(--ddd-theme-default-shrineLight);;
            position: relative;
        }

        
      
    `];
    }

    render() {
        const nameOfMonth = new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});
        return html`
        <div class="calendar-wrapper">
            <div class="calendar-header">
                <button class="prev-month" @click=${this._prevMonth}> Previous</button>
                <span class="date">${nameOfMonth} ${this.currentYear}</span>
                <button class="next-month" @click=${this._nextMonth}>Next</button>
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

    _prevMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
    }

    _nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
    }

}

globalThis.customElements.define(TitansWebsiteSchedule.tag, TitansWebsiteSchedule);