const NilSnowflakeRegExp = /^0{16,}$/;
export function isNilSnowflake(value) {
    return typeof (value) === "string" && NilSnowflakeRegExp.test(value);
}
