// Imports
import { big } from "../deps.ts";
import { zero, one } from "./constants.ts";
import { verifyAlphabet } from "./verifyBase.ts";
import { verifyString } from "./verifyString.ts";

/**
 * Decode some string into a big integer using an alphabet.
 * @param str The string.
 * @param alphabet The alphabet to decode from.
 */
export function decode (str: string, alphabet: string): bigint
{
	if (!verifyAlphabet(alphabet))
		throw new Error("Alphabet contains repeated character or is shorter than 2 characters!");
	if (!verifyString(str, alphabet))
		throw new Error("The string contains invalid characters!");
	const alen: bigint = big(alphabet.length);
	const slen: bigint = big(str.length);
	let n: bigint = zero;
	for (let i: number = 0; i < alphabet.length; i++)
	{
		const char = str.charAt(Number(i));
		let exp = slen - big(i) - one;
		if (exp < zero) exp = zero;
		n += big(alphabet.indexOf(char)) * (alen ** exp);
	}
	return n;
}
