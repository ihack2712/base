// Imports
import { assert, assertThrows } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { decode } from "./decode.ts";
import { _base2 } from "./constants.ts";

Deno.test("decode invalid", async () => {
	assertThrows(
		() => decode("0", "0"),
		undefined,
		undefined,
		"Should throw on too short alphabet."
	);
});

Deno.test("decode invalid str", async () => {
	assertThrows(
		() => decode("2", "01"),
		undefined,
		undefined,
		"Should throw when str contains invalid characters."
	);
});

Deno.test("decode 0", async () => {
	assert(
		decode("0", _base2) === 0n,
		"0 should be 0"
	);
});

Deno.test("decode 1", async () => {
	assert(
		decode("1", _base2) === 1n,
		"1 should be 1"
	);
});

Deno.test("decode 2", async () => {
	assert(
		decode("10", _base2) === 2n,
		"2 should be 10"
	);
});

Deno.test("decode 3", async () => {
	assert(
		decode("11", _base2) === 3n,
		"3 should be 11"
	);
});
