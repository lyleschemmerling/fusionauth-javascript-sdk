import { FusionAuthService } from '../FusionAuthService';

class FaAccount extends HTMLElement {
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
      <button id="fa-account-button">Manage Account</button>
    `;
    this.querySelector('#fa-account-button')?.addEventListener('click', () => {
      this.fusionAuthService.manageAccount();
    });
  }
}

customElements.define('fa-account', FaAccount);
