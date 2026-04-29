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
        this.games = [];
    }

    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            currentMonth: {type: Number},
            currentYear: {type: Number},
            games: {type: Array}
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }

        .calendar-wrapper {
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
            padding-bottom: var(--ddd-spacing-5);
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--ddd-spacing-2);
        }

        .prev-month, .next-month {
            background-color: var(--ddd-theme-default-nittanyNavy);
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            font-size: var(--ddd-font-size-4xs);
            cursor: pointer;
            margin: var(--ddd-spacing-4);
            color: var(--ddd-theme-default-shrineLight);
        }

        .prev-month:hover, .next-month:hover {
            opacity: 0.9;
            transform: scale(1.05);
            transition: 0.3s;
        }

        .date {
            color: light-dark(var(--ddd-theme-default-info), var(--ddd-theme-default-shrineLight));            
            font: var(--ddd-font-primary);
            font-size: var(--ddd-font-size-ms);
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: var(--ddd-spacing-1);
            padding: var(--ddd-spacing-4);
        }

        .days-header {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: var(--ddd-spacing-1);
            padding: var(--ddd-spacing-4);
            color: var(--ddd-theme-default-shrineLight);
            text-align: center;
        }

        .days-header span {
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            border-radius: var(--ddd-radius-sm);
            padding: var(--ddd-spacing-6);
            background-color: var(--ddd-theme-default-nittanyNavy);
        }

        .day, .day-empty{
            padding: var(--ddd-spacing-3);
            min-height: 80px;
            background-color: var(--ddd-theme-default-shrineLight);
            position: relative;
            border-radius: var(--ddd-radius-sm);
        }

        .day-number {
            display: block;
            color: var(--ddd-theme-default-info);
            margin-bottom: var(--ddd-spacing-1);
        }

        .game-tag {
            color: var(--ddd-theme-default-info);            
            font: var(--ddd-font-primary);
            font-size: var(--ddd-font-size-4xs);
        }

    `];
    }

    render() {
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const nameOfMonth = new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});

        const emptyCells = [];
        for (let i = 0; i < firstDay; i++) {
            emptyCells.push(html`
                <div class="day-empty"></div>`);
        }

        const dayCells = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(this.currentYear, this.currentMonth, i);
            const dateStr = date.toISOString().split('T')[0];
            const game = this.games.find(g => g.date === dateStr);
            let gameTag = ' ';
            if (game) {
                gameTag = html`
                    <div class="game-tag">
                        ${game.title} ${game.location} ${game.time}
                    </div>
                `
            }
            dayCells.push(html`
            <div class="day">
                <span class="day-number">${i}</span>
                ${gameTag}
            </div>
            `);
        } 

        return html`
        <div class="calendar-wrapper">
            <div class="calendar-header">
                <button class="prev-month" @click=${this._prevMonth}> Previous</button>
                <span class="date">${nameOfMonth} ${this.currentYear}</span>
                <button class="next-month" @click=${this._nextMonth}>Next</button>
            </div>
            <div class="days-header">
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
            </div>
            <div class="calendar-grid">
                ${emptyCells}
                ${dayCells}
            </div>
        </div> 
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.getScheduleInformation();
    }

    getScheduleInformation() {
        fetch("./api/schedule").then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            else {
                throw new Error("Failed to load JSON");
            }
        })
        .then((data) => {
            this.games = data.games;
        })
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