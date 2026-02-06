const NonNilSnowflake = /^(?!0{16,})\d{16,}$/;
export function isNonNilSnowflake(value) {
    if (value) {
        return NonNilSnowflake.test(value);
    }
    return false;
}
