import { APIGuildMember } from "discord-api-types/v10";

export interface BloxlinkAPIOptions {
    apiKey: string;
}

export interface BloxlinkGuildAPIOptions extends BloxlinkAPIOptions {
    guildId: string;
}

export type RobloxGroup = {
    id: number;
    name: string;
    memberCount: number;
    hasVerifiedBadge: boolean;
}

export type RobloxRole = {
    id: number;
    name: string;
    rank: number;
}

export type RobloxUser = {
    name: string;
    id: number;
    displayName: string;
    description: string;
    isBanned: boolean;
    created: string;
    badges: {
        ImageUri: string;
        Name: string;
    }[];
    profileLink: string;
    presence: null;
    groups: {
        group: RobloxGroup;
        role: RobloxRole;
    }[];
    avatar: {
        bustThumbnail: string;
        headshotThumbnail: string;
        fullBody: string;
    };
    rap: null;
    value: null;
    placeVisits: null;
    hasDisplayName: boolean;
    externalAppDisplayName: null;
    hasVerifiedBadge: boolean;
    groupsv2: {
        [groupId: string]: {
            group: RobloxGroup;
            role: RobloxRole;
        }
    }[];
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
        discord?: { [discordId: string]: APIGuildMember };
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

export type ErrorAPIResponse = {
    error: string;
}