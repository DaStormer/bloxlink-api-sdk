# bloxlink-api-sdk
Official Node.js API wrapper for interacting with the [Bloxlink](https://blox.link/) API.

<p>
		<a href="https://www.npmjs.com/package/bloxlink-api-sdk"><img src="https://img.shields.io/npm/v/bloxlink-api-sdk.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/bloxlink-api-sdk"><img src="https://img.shields.io/npm/dt/bloxlink-api-sdk.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/DaStormer/bloxlink-api-sdk/actions"><img src="https://github.com/DaStormer/bloxlink-api-sdk/actions/workflows/lint.yml/badge.svg" alt="lint status" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" /></a>
</p>

## About
bloxlink-api-sdk is the official Node module for Bloxlink's API written in TypeScript. It offers full coverage of the Bloxlink API and will support future updates.

Note: Some features may require premium or privileged API keys. Consult the [Bloxlink Developer Portal](https://www.blox.link/dashboard/user/developer) for more information.

## Installation
<a href="https://npmjs.org/package/bloxlink-api-sdk"><img src="https://nodei.co/npm/bloxlink-api-sdk.png" alt="npm"></a>

## Example Usage
The Bloxlink API is divided into the guild and global APIs. As such, we offer two client classes respectively: `GuildAPIClient` and `GlobalAPIClient`.

### Guild API
```js
const Bloxlink = require("bloxlink-api-sdk");
const bloxlink = new Bloxlink.GuildAPIClient({ apiKey: "BLOXLINK GUILD API KEY", guildId: "SERVER ID" });

const resp = await bloxlink.discordToRoblox("DISCORD USER ID");
console.log(resp);
```

### Global API
```js
const Bloxlink = require("bloxlink-api-sdk");
const bloxlink = new Bloxlink.GlobalAPIClient({ apiKey: "BLOXLINK GLOBAL API KEY" });

const resp = await bloxlink.discordToRoblox("DISCORD USER ID");
console.log(resp);
```

### Bloxlink API Options
When you create the client class, you supply default API options to use (apiKey and guildId). Optionally, you can specify different API options in the last parameter of the methods to override the default values.

## Contributing
Contributions are welcome! Create a pull request to the dev branch and follow conventional commit formatting. We use ESLint to enforce a consistent code style.

## License
bloxlink-api-sdk is an open-source project licensed under the MIT License.
