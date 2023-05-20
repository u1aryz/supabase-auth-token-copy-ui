# Supabase Authentication Access Token Copying Web Application

## Overview
This application is designed to help you quickly and easily copy Supabase Access Tokens. It's a convenient tool for developers working with Supabase, allowing them to test or debug user-related functionality in their Supabase applications.

<img src="art/screenshot.png" width="70%" alt="screenshot">

## Installation
First, clone the repository:

```bash
git clone https://github.com/u1aryz/supabase-auth-token-copy-ui.git
cd supabase-auth-token-copy-ui
```

Next, install the necessary dependencies:

```bash
pnpm install
```

## Configuration
Before starting the application, you need to set up your Supabase project and get your configuration details.

```bash
cp .env.example .env
```

Enter your Supabase configuration.

## Usage
To start the application, run:

```bash
pnpm run dev
```

You can then access the web application at http://localhost:5173 by default.

To copy a Supabase Authentication Access Token, follow these steps:

1. Click `Login by Google`
2. Click `Copy`

Please note: This application is intended for testing and debugging purposes. It should not be used in production environments.

## License

[MIT](LICENSE) &copy; [u1aryz](https://u1aryz.com)
