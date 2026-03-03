import { DiscordSnowflake } from "@sapphire/snowflake";
export function generateSnowflake(options) {
    const timestamp = options?.ts;
    const increment = options?.seq ? BigInt(options.seq) : undefined;
    return DiscordSnowflake.generate({ increment, timestamp }).toString();
}
export const randomSnowflake = generateSnowflake;
