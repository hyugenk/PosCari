class NavBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
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
      width: 100%;
      background-color: #04364A;
      color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      
    }
    
    h2 {
      padding: 16px;
      transition: transform 0.3s ease-in-out; 
    }
    
    h2:hover {
      animation: shake 0.1s ease-in-out infinite; 
    }
    
    @keyframes shake {
      0%, 100% {
        transform: translateX(0); 
      }
      25% {
        transform: translateX(-5px); 
      }
      75% {
        transform: translateX(5px); 
      }
    }
  </style>
  
  <h2>POSCARI</h2>
  
    `;
  }
}

customElements.define('nav-bar', NavBar);
