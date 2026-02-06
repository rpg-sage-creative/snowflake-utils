import { tagLiterals } from "@rsc-utils/template-literal-utils";
import { NIL_SNOWFLAKE, isNonNilSnowflake, randomSnowflake } from "../build/index.js";
import { getTests } from "./data.js";

describe("isNonNilSnowflake", () => {
	const tests = getTests(randomSnowflake(), NIL_SNOWFLAKE);
	tests.forEach(({ input, isNonNilSnowflakeResult }) => {
		test(tagLiterals`isNonNilSnowflake(${input}) === ${isNonNilSnowflakeResult}`, () => {
			expect(isNonNilSnowflake(input)).toBe(isNonNilSnowflakeResult);
		});
	});
});
