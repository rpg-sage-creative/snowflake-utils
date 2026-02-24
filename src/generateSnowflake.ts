import { DiscordSnowflake } from "@sapphire/snowflake";
import type { Snowflake } from "./types.js";

type SnowflakeOptions = { timestamp?:bigint|Date|number; };

/** A convenience method for generating Discord snowflakes and returning them as a string. */
export function generateSnowflake(options?: SnowflakeOptions): Snowflake {
	return DiscordSnowflake.generate(options).toString() as Snowflake;
}

/** @deprecated use generateSnowflake() instead */
export const randomSnowflake = generateSnowflake;