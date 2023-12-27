import {
    BloxlinkAPIOptions,
    DiscordToRobloxGlobalAPIResponse,
    ErrorAPIResponse,
    RobloxToDiscordGlobalAPIResponse,
} from "./typings";

const fetch = globalThis.fetch ?? require("node-fetch");

export default class BloxlinkGlobalClient {
    options: BloxlinkAPIOptions;

    constructor(options: BloxlinkAPIOptions) {
        this.options = options;
    }

    async discordToRoblox(discordUserId: string, options?: BloxlinkAPIOptions): Promise<DiscordToRobloxGlobalAPIResponse | ErrorAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/discord-to-roblox/${discordUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<DiscordToRobloxGlobalAPIResponse | ErrorAPIResponse>);

        return data;
    }

    async robloxToDiscord(robloxUserId: string, options?: BloxlinkAPIOptions): Promise<RobloxToDiscordGlobalAPIResponse | ErrorAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/roblox-to-discord/${robloxUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<RobloxToDiscordGlobalAPIResponse | ErrorAPIResponse>);

        return data;
    }

    set setAPIOptions(options: BloxlinkAPIOptions) {
        this.options = options;
    }

    get apiOptions(): BloxlinkAPIOptions {
        return this.options;
    }
}