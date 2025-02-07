import { SDKCore, SDKConfig, UserInfo } from '@fusionauth-sdk/core';

export class FusionAuthService {
  private sdkCore: SDKCore;

  constructor(config: SDKConfig) {
    this.saveConfigToLocalStorage(config);
    this.sdkCore = new SDKCore(this.getConfigFromLocalStorage());
  }

  configure(config: SDKConfig) {
    this.saveConfigToLocalStorage(config);
    this.sdkCore = new SDKCore(this.getConfigFromLocalStorage());
  }

  startLogin(state?: string) {
    this.sdkCore.startLogin(state);
  }

  startRegister(state?: string) {
    this.sdkCore.startRegister(state);
  }

  startLogout() {
    this.sdkCore.startLogout();
  }

  manageAccount() {
    this.sdkCore.manageAccount();
  }

  async fetchUserInfo<T = UserInfo>(): Promise<T> {
    return this.sdkCore.fetchUserInfo<T>();
  }

  async refreshToken(): Promise<Response> {
    return this.sdkCore.refreshToken();
  }

  initAutoRefresh(): NodeJS.Timeout | undefined {
    return this.sdkCore.initAutoRefresh();
  }

  handlePostRedirect(callback?: (state?: string) => void) {
    this.sdkCore.handlePostRedirect(callback);
  }

  get isLoggedIn(): boolean {
    return this.sdkCore.isLoggedIn;
  }

  private saveConfigToLocalStorage(config: SDKConfig) {
    localStorage.setItem('fusionAuthConfig', JSON.stringify(config));
  }

  private getConfigFromLocalStorage(): SDKConfig {
    const config = localStorage.getItem('fusionAuthConfig');
    if (!config) {
      throw new Error('FusionAuth config not found in local storage');
    }
    return JSON.parse(config);
  }
}
