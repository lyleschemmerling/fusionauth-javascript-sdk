import { FusionAuthService } from '../FusionAuthService';

class FaLogout extends HTMLElement {
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
      <button id="fa-logout-button">Logout</button>
    `;
    this.querySelector('#fa-logout-button')?.addEventListener('click', () => {
      this.fusionAuthService.startLogout();
    });
  }
}

customElements.define('fa-logout', FaLogout);
