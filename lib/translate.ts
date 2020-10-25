// Imports
import { encode } from "./encode.ts";
import { decode } from "./decode.ts";

/**
 * Translate some encoded string into a different alphabet.
 * @param str The encoded string to translate.
 * @param fromAlphabet The alphabet to translate from.
 * @param toAlphabet The alphabet to translate to.
 */
export function translate (str: string, fromAlphabet: string, toAlphabet: string)
{
	return encode(decode(str, fromAlphabet), toAlphabet);
}
