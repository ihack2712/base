// Imports
import { assert, assertThrows } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { encode } from "./encode.ts";
import { _base2 } from "./constants.ts";

Deno.test("encode invalid", async () => {
	assertThrows(
		() => encode(0, "0"),
		undefined,
		undefined,
		"Should throw on too short alphabet."
	);
});

Deno.test("encode negative", async () => {
	assert(
		encode(-1, _base2) === "1",
		"1 should be 0"
	);
});

Deno.test("encode 0", async () => {
	assert(
		encode(0, _base2) === "0",
		"0 should be 0"
	);
});

Deno.test("encode 1", async () => {
	assert(
		encode(1, _base2) === "1",
		"1 should be 1"
	);
});

Deno.test("encode 2", async () => {
	assert(
		encode(2, _base2) === "10",
		"2 should be 10"
	);
});

Deno.test("encode 3", async () => {
	assert(
		encode(3, _base2) === "11",
		"3 should be 11"
	);
});
