// Imports
import { assert } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { verifyString } from "./verifyString.ts";

Deno.test("does not contain", async () => {
	assert(
		!verifyString("b", "a"),
		"Alphabet doesn't contain string."
	);
});

Deno.test("does contain", async () => {
	assert(
		verifyString("b", "ab"),
		"Alphabet does contain."
	);
});
