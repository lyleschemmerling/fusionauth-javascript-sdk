import { FusionAuthService } from '../FusionAuthService';

class FaRegister extends HTMLElement {
  private fusionAuthService: FusionAuthService;

  constructor() {
    super();
    this.fusionAuthService = new FusionAuthService({
      clientId: '',
      serverUrl: '',
      redirectUri: ''
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button id="fa-register-button">Register</button>
    `;
    this.querySelector('#fa-register-button')?.addEventListener('click', () => {
      this.fusionAuthService.startRegister();
    });
  }
}

customElements.define('fa-register', FaRegister);
