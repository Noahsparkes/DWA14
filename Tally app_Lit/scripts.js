import { html, css, LitElement } from 'lit';

class TallyApp extends LitElement {
  static styles = css`
    /* Counter */
    .counter {
      background: var(--color-dark-gray);
    }

    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light-gray);
    }

    .counter__actions {
      display: flex;
    }

    .counter__button {
      background: none;
      width: 50%;
      border-width: 0;
      color: var(--color-white);
      font-size: 3rem;
      height: 10rem;
      border-bottom: 1px solid var(--color-light-gray);
      transition: transform 0.3s;
      transform: translateY(0);
    }

    .counter__button:disabled {
      opacity: 0.2;
    }

    .counter__button:active {
      background: var(--color-medium-gray);
      transform: translateY(2%);
    }

    .counter__button_first {
      border-right: 1px solid var(--color-light-gray);
    }
  `;

  static properties = {
    number: { type: Number },
  };

  constructor() {
    super();
    this.number = 0;
  }

  subtractHandler() {
    this.number -= 5;
    this.requestUpdate();
  }

  addHandler() {
    this.number += 5;
    this.requestUpdate();
  }

  render() {
    return html`
      <input
        class="counter__value"
        data-key="number"
        readonly
        .value="${this.number}"
      />
      <div class="counter__actions">
        <button
          class="counter__button counter__button_first"
          data-key="subtract"
          @click="${this.subtractHandler}"
          ?disabled="${this.number <= MIN_NUMBER}"
        >
          -
        </button>
        <button
          class="counter__button"
          data-key="add"
          @click="${this.addHandler}"
          ?disabled="${this.number >= MAX_NUMBER}"
        >
          +
        </button>
      </div>
    `;
  }
}

customElements.define('tally-app', TallyApp);
