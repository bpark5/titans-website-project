import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `titans-website-stats`
 * 
 * @demo index.html
 * @element titans-website-stats
 */
export class TitansWebsiteStats extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "titans-website-stats";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }


  constructor() {
    super();
    this.stats = [
        {label: "Wins", value: 10},
        {label: "Losses", value: 5},
        {label: "Division Rank", value: 2}
    ];
}

static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-4);
      }

      .stat-card {
        background: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-sm);
        overflow: hidden;
        text-align: center;
        padding: var(--ddd-spacing-3);
      }

      .label {
        margin-top: var(--ddd-spacing-3);
        font-weight: 700;
        color: var(--ddd-theme-default-info);
      }

      .value {
        font-size: var(--ddd-font-size-s);
        font-weight: 700;
        color: var(--ddd-theme-default-accent);
        margin-top: var(--ddd-spacing-1);
      }
      `,
    ];
  }
  
  render() {
    return html`
      <div class="stats-grid">
        ${this.stats.map(
          (stat) => html`
            <div class="stat-card">
              <div class="label">${stat.label}</div>
              <div class="value">${stat.value}</div>
            </div>
          `
        )}
      </div>
    `;
  }
}

globalThis.customElements.define(TitansWebsiteStats.tag, TitansWebsiteStats);