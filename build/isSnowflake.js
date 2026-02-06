import { isWholeNumberString } from "@rsc-utils/type-utils";
export function isSnowflake(value) {
    return isWholeNumberString(value) && value.length >= 16;
}
