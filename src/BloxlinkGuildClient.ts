import {
    BloxlinkGuildAPIOptions,
    DiscordToRobloxGuildAPIResponse,
    RobloxToDiscordGuildAPIResponse,
    UpdateUserGuildAPIResponse,
} from "./typings";

const fetch = globalThis.fetch ?? require("node-fetch");

export default class BloxlinkGuildClient {
    options: BloxlinkGuildAPIOptions;

    constructor(options: BloxlinkGuildAPIOptions) {
        this.options = options;
    }

    async discordToRoblox(discordUserId: string, options?: BloxlinkGuildAPIOptions): Promise<DiscordToRobloxGuildAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/guilds/${apiOptions.guildId}/discord-to-roblox/${discordUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<DiscordToRobloxGuildAPIResponse>);

        return data;
    }

    async robloxToDiscord(robloxUserId: string, options?: BloxlinkGuildAPIOptions): Promise<RobloxToDiscordGuildAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/guilds/${apiOptions.guildId}/roblox-to-discord/${robloxUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
        }).then(res => res.json() as Promise<RobloxToDiscordGuildAPIResponse>);

        return data;
    }

    async updateUser(discordUserId: string, options?: BloxlinkGuildAPIOptions): Promise<UpdateUserGuildAPIResponse> {
        const apiOptions = options ?? this.options;

        const data = await fetch(`https://api.blox.link/v4/public/guilds/${apiOptions.guildId}/update-user/${discordUserId}`, {
            headers: { Authorization: apiOptions.apiKey },
            method: "POST",
        }).then(res => res.json() as Promise<UpdateUserGuildAPIResponse>);

        return data;
    }

    set setAPIOptions(options: BloxlinkGuildAPIOptions) {
        this.options = options;
    }

    get apiOptions(): BloxlinkGuildAPIOptions {
        return this.options;
    }
}