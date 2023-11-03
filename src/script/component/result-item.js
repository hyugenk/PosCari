class ResultItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set postcode(postcode) {
    this._postcode = postcode;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          border-radius: 10px;
          overflow: hidden;
          background-color: #fff; 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid #e5e5e5; 
        }
        
        .pos-info {
          padding: 24px;
          background-color: #fff; 
        }
        .pos-info > h2 {
          font-weight: bold;
          color: #e31b6d; 
          margin-bottom: 10px;
        }
        .pos-info > p {
          color: black; 
          margin-top: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; 
        }
      </style>
      
      <div class="pos-info">
        <h2>Kode POS : ${this._postcode.postalcode}</h2>
        <p>Provinsi : ${this._postcode.province}</p>
        <p>Kabupaten : ${this._postcode.regency}</p>
        <p>Kecamatan : ${this._postcode.district}</p>
        <p>Desa : ${this._postcode.village}</p>
      </div>
    `;
  }
}

customElements.define('result-item', ResultItem);