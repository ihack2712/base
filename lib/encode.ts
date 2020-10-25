// Imports
import type { Big } from "../deps.ts";
import { big } from "../deps.ts";
import { minusOne, zero } from "./constants.ts";
import { verifyAlphabet } from "./verifyBase.ts";

/**
 * Encode some big integer into a string using an alphabet.
 * @param num The big integer.
 * @param alphabet The alphabet to encode the big integer into.
 */
export function encode (num: Big, alphabet: string): string
{
	if (!verifyAlphabet(alphabet))
		throw new Error("Alphabet contains repeated character or is shorter than 2 characters!");
	let n = big(num);
	if (n < zero) n *= minusOne;
	let str = "";
	const len: bigint = big(alphabet.length);
	while (n > zero)
	{
		str = alphabet.charAt(Number(n % len)) + str;
		n = n / len;
	}
	return str || alphabet[0];
}
