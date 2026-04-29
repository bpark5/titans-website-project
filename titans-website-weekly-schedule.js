/**
 * Copyright 2026 Brandon Park
 * @license Apache-2.0, see LICENSE for full text.
*/
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-weekly-schedule`
 * 
 * @demo index.html
 * @element titans-website-weekly-schedule
 */
export class TitansWebsiteWeeklySchedule extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
        return "titans-website-weekly-schedule";
    }

    constructor() {
        super();
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        this.currentWeek = weekStart;
        this.games = [];
    }

    static get properties() {
        return {
            ...super.properties,
            currentWeek: {type: Object},
            games: {type: Array}
        };
    }

    static get styles() {
    return [super.styles,
    css`
        :host {
            display:block;
        }

        .week-wrapper {
            background-color: light-dark(var(--ddd-theme-default-limestoneLight),var(--ddd-theme-default-nittanyNavy));
            padding-top: var(--ddd-spacing-15);
        }

        .week-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: var(--ddd-spacing-4);
            background-color: var(--ddd-theme-default-accent);
            border-radius: var(--ddd-radius-sm);
            margin-left: var(--ddd-spacing-5);
            margin-right: var(--ddd-spacing-5);
        }

        .week-buttons {
            display: flex;
            padding-right: var(--ddd-spacing-1);
        }

        .days-header {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            padding: var(--ddd-spacing-4);
            padding-bottom: 0;
            text-align: center;
            font-weight: bold;
            color: var(--ddd-theme-default-shrineLight);
        }

        .week-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: var(--ddd-spacing-1);
            padding: var(--ddd-spacing-4);
        }

        .date {
            color: var(--ddd-theme-default-info);            
            font: var(--ddd-font-primary);
            font-size: var(--ddd-font-size-xs);
        }

        .day {
            padding: var(--ddd-spacing-3);
            min-height: 80px;
            background-color: var(--ddd-theme-default-shrineLight);
            position: relative;
            border-radius: var(--ddd-radius-sm);
        }

        .days-header span {
            border: var(--ddd-border-md);
            border-color: var(--ddd-theme-default-accent);
            border-radius: var(--ddd-radius-sm);
            padding: var(--ddd-spacing-6);
            background-color: var(--ddd-theme-default-nittanyNavy);
        }

        .day-number {
            display: block;
            color: var(--ddd-theme-default-info);
            margin-bottom: var(--ddd-spacing-1);

        }


        .prev-week, .next-week, .today-button {
            background-color: var(--ddd-theme-default-nittanyNavy);
            border-radius: var(--ddd-radius-sm);
            border: var(--ddd-border-sm);
            border-color: var(--ddd-theme-default-shrineLight);
            font-size: var(--ddd-font-size-4xs);
            cursor: pointer;
            margin: var(--ddd-spacing-4);
            color: var(--ddd-theme-default-shrineLight);
        }

        .prev-week:hover, .next-week:hover, .today-button:hover {
            opacity: 0.9;
            transform: scale(1.05);
            transition: 0.3s;
        }

        .game-tag {
            color: var(--ddd-theme-default-info);            
            font: var(--ddd-font-primary);
            font-size: var(--ddd-font-size-4xs);
        }

        .day.today {
            border: var(--ddd-border-lg);
            border-color: var(--ddd-theme-default-accent);
        }

    `];
    }

    render() {
        const weekEnd = new Date(this.currentWeek);
        weekEnd.setDate(weekEnd.getDate() + 6);

        const startLabel = this.currentWeek.toLocaleDateString('default', {month: 'short', day: 'numeric'});
        const endLabel = weekEnd.toLocaleDateString('default', {month: 'short', day: 'numeric', year: 'numeric'});
    
        const today = new Date();
        const weekCells = [];
            for (let i = 0; i < 7; i++) {
            const day = new Date(this.currentWeek.getFullYear(), this.currentWeek.getMonth(), this.currentWeek.getDate() + i);
            day.setDate(day.getDate());
            const dateStr = day.toISOString().split('T')[0];
            const game = this.games.find(g => g.date === dateStr);
            let gameTag = ' ';
            if (game) {
                gameTag = html`
                    <div class="game-tag">
                        ${game.title} ${game.location} ${game.time}
                    </div>
                `
            }

            const isToday = day.getDate() === today.getDate() &&
                day.getMonth() === today.getMonth() &&
                day.getFullYear() === today.getFullYear();

            weekCells.push (html`
                <div class="day ${isToday ? 'today' : ' '}">
                    <span class="day-number">${day.getDate()}</span>
                        ${gameTag}
                </div>`)
        }

        return html`
        <div class="week-wrapper">
            <div class="week-header">
                <span class="date">${startLabel} - ${endLabel}</span>
                <div class="week-buttons">
                    <button class="prev-week" @click=${this._prevWeek}> Prev</button>
                    <button class="today-button" @click=${this._goToToday}>Today</button>
                    <button class="next-week" @click=${this._nextWeek}>Next</button>
                </div>
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
            <div class="week-grid">
                ${weekCells}
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

    _prevWeek() {
        const date = new Date(this.currentWeek);
        date.setDate(date.getDate() - 7);
        this.currentWeek = date;
    }

    _nextWeek() {
        const date = new Date(this.currentWeek);
        date.setDate(date.getDate() + 7);
        this.currentWeek = date;
    }

    _goToToday() {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        this.currentWeek = weekStart;
    }

}

globalThis.customElements.define(TitansWebsiteWeeklySchedule.tag, TitansWebsiteWeeklySchedule);