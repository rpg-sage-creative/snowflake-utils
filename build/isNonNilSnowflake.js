const NonNilSnowflake = /^(?!0{16,})\d{16,}$/;
export function isNonNilSnowflake(value) {
    return typeof (value) === "string" && NonNilSnowflake.test(value);
}
