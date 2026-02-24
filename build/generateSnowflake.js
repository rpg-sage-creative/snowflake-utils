import { DiscordSnowflake } from "@sapphire/snowflake";
export function generateSnowflake(options) {
    return DiscordSnowflake.generate(options).toString();
}
export const randomSnowflake = generateSnowflake;
