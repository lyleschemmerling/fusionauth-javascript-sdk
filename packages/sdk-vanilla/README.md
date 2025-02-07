# FusionAuth Vanilla SDK

This SDK provides web components and a service class to integrate FusionAuth with any framework using vanilla JavaScript.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Web Components](#web-components)
  - [FusionAuthService](#fusionauthservice)
- [Documentation](#documentation)
- [Releases](#releases)

## Overview

This SDK helps manage authentication state for your web application and provides functionality to login, register, and logout users. It also includes web components for common authentication actions.

## Getting Started

### Installation

NPM:

```bash
npm install @fusionauth/vanilla-sdk
```

Yarn:

```bash
yarn add @fusionauth/vanilla-sdk
```

### Configuration

To configure the SDK, you need to create an instance of `FusionAuthService` with the necessary configuration.

```javascript
import { FusionAuthService } from '@fusionauth/vanilla-sdk';

const fusionAuthService = new FusionAuthService({
  clientId: '', // Your FusionAuth client ID
  serverUrl: '', // The base URL of the server that performs the token exchange
  redirectUri: '' // The URI that the user is directed to after the login/register/logout action
});
```

## Usage

### Web Components

The SDK provides the following web components:

- `<fa-account>`: A button to redirect to the user's account management page.
- `<fa-login>`: A button to redirect to the `/app/login` endpoint and start the OAuth flow.
- `<fa-logout>`: A button to redirect to the `/app/logout` endpoint.
- `<fa-register>`: A button to redirect to the `/app/register` endpoint.

To use these components, simply include them in your HTML:

```html
<fa-account></fa-account>
<fa-login></fa-login>
<fa-logout></fa-logout>
<fa-register></fa-register>
```

### FusionAuthService

The `FusionAuthService` class provides methods to handle authentication actions and manage user state.

```javascript
import { FusionAuthService } from '@fusionauth/vanilla-sdk';

const fusionAuthService = new FusionAuthService({
  clientId: '', // Your FusionAuth client ID
  serverUrl: '', // The base URL of the server that performs the token exchange
  redirectUri: '' // The URI that the user is directed to after the login/register/logout action
});

// Start the login process
fusionAuthService.startLogin();

// Start the registration process
fusionAuthService.startRegister();

// Start the logout process
fusionAuthService.startLogout();

// Manage account
fusionAuthService.manageAccount();

// Fetch user info
fusionAuthService.fetchUserInfo().then(userInfo => {
  console.log(userInfo);
});

// Refresh token
fusionAuthService.refreshToken().then(response => {
  console.log(response);
});

// Initialize auto-refresh
fusionAuthService.initAutoRefresh();

// Handle post-redirect actions
fusionAuthService.handlePostRedirect(state => {
  console.log('Redirect state:', state);
});

// Check if the user is logged in
console.log('Is logged in:', fusionAuthService.isLoggedIn);
```

## Documentation

For more detailed documentation, please refer to the [FusionAuth documentation](https://fusionauth.io/docs).

## Releases

This package is released via GitHub actions.
