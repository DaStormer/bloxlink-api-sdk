import {
    BloxlinkAPIOptions,
    DiscordToRobloxGlobalAPIResponse,
    RobloxToDiscordGlobalAPIResponse,
} from "./typings";

export default class BloxlinkGlobalClient {
    options: BloxlinkAPIOptions;

    constructor(options: BloxlinkAPIOptions) {
        this.options = options;
    }

    async discordToRoblox(discordUserId: string, options?: BloxlinkAPIOptions): Promise<DiscordToRobloxGlobalAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/discord-to-roblox/${discordUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<DiscordToRobloxGlobalAPIResponse>);

        return data;
    }

    async robloxToDiscord(robloxUserId: string, options?: BloxlinkAPIOptions): Promise<RobloxToDiscordGlobalAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/roblox-to-discord/${robloxUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<RobloxToDiscordGlobalAPIResponse>);

        return data;
    }

    set setAPIOptions(options: BloxlinkAPIOptions) {
        this.options = options;
    }

    get apiOptions(): BloxlinkAPIOptions {
        return this.options;
    }
}