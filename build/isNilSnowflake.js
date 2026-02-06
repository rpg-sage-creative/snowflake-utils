const NilSnowflakeRegExp = /^0{16,}$/;
export function isNilSnowflake(value) {
    if (value) {
        return NilSnowflakeRegExp.test(value);
    }
    return false;
}
