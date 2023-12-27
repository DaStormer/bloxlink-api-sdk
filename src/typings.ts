import { APIGuildMember } from "discord-api-types/v10";

export interface BloxlinkAPIOptions {
    apiKey: string;
}

export interface BloxlinkGuildAPIOptions extends BloxlinkAPIOptions {
    guildId: string;
}

export type RobloxUser = {
    name: string;
    id: number;
    description: string;
    badges: object[];
    isBanned: boolean;
    groups: object[];
    avatar: object;
}

export type DiscordToRobloxGuildAPIResponse = {
    robloxId: string;
    resolved: {
        roblox?: RobloxUser;
        discord?: APIGuildMember;
    };
}

export type RobloxToDiscordGuildAPIResponse = {
    discordIDs: string[];
    resolved: {
        discord?: { [key: string]: APIGuildMember };
    }
}

export type UpdateUserGuildAPIResponse = {
    addedRoles: string[];
    removedRoles: string[];
    nickname: string;
}

export type DiscordToRobloxGlobalAPIResponse = {
    robloxId: string;
    resolved: {
        roblox?: RobloxUser;
    };
}

export type RobloxToDiscordGlobalAPIResponse = {
    discordIDs: string[];
    resolved: Record<string, never>;
}