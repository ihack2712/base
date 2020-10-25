// Imports
import { assert } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { verifyAlphabet } from "./verifyBase.ts";

Deno.test("shorter than 2", async () => {
	assert(
		!verifyAlphabet("a"),
		"Alphabet is shorter than 2 characters and should not be accepted!"
	);
});

Deno.test("repeated characters", async () => {
	assert(
		!verifyAlphabet("aa"),
		"Alphabet contains repeated characters and thus should not be accepted!"
	);
});

Deno.test("valid", async () => {
	assert(
		verifyAlphabet("abc"),
		"Alphabet is actually valid and should be accepted, what's going on here?"
	);
});
