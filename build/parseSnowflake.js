const SnowflakeRegExp = /\b(?<id>\d{16,})\b/;
export function parseSnowflake(value) {
    if (!value)
        return undefined;
    return SnowflakeRegExp.exec(value)?.groups?.id;
}
