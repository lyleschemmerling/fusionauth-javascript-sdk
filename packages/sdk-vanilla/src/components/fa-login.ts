import { FusionAuthService } from '../FusionAuthService';

class FaLogin extends HTMLElement {
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
      <button id="fa-login-button">Login</button>
    `;
    this.querySelector('#fa-login-button')?.addEventListener('click', () => {
      this.fusionAuthService.startLogin();
    });
  }
}

customElements.define('fa-login', FaLogin);
