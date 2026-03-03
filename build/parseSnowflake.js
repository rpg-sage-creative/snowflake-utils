const SnowflakeRegExp = (/\b(?<id>\d{16,})\b/);
export function parseSnowflake(value) {
    return typeof (value) === "string" ? SnowflakeRegExp.exec(value)?.groups?.id : undefined;
}
