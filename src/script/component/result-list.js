import './result-item.js';

class ResultList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set postcodes(postcode) {
    this._postcodes = postcode;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';
    
    this._postcodes.forEach(postcode => {
      const resultItemElement = document.createElement('result-item');
      resultItemElement.postcode = postcode;
      this.shadowDOM.appendChild(resultItemElement);
    })
  }

  // tampilan error
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: bold;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('result-list', ResultList);