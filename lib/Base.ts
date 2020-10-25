// Imports
import type { Big } from "../deps.ts";
import { verifyAlphabet } from "./verifyBase.ts";
import { encode } from "./encode.ts";
import { decode } from "./decode.ts";
import { translate } from "./translate.ts";

/**
 * A base object that contains encode and decode for the given base.
 */
export class Base
{
	
	/** The length of the alphabet. */
	public readonly length: number;
	
	/**
	 * Create a new base object.
	 * @param alphabet The alphabet.
	 */
	public constructor (public readonly alphabet: string)
	{
		if (!verifyAlphabet(alphabet))
			throw new Error("Alphabet contains repeated character or is shorter than 2 characters!");
		this.length = alphabet.length;
	}
	
	/**
	 * Encode a number to *this* base.
	 * @param num The number to encode.
	 */
	public encode (num: Big): string
	{
		return encode(num, this.alphabet);
	}
	
	/**
	 * Decode a string from *this* base.
	 * @param str The string to decode.
	 */
	public decode (str: string): bigint
	{
		return decode(str, this.alphabet);
	}
	
	/**
	 * Translate from *this* base to another base or alphabet.
	 * @param str The string to translate.
	 * @param to The base or alphabet to translate to.
	 */
	public translate (str: string, to: Base | string): string
	{
		return translate(str, this.alphabet, to instanceof Base ? to.alphabet : to);
	}
	
	/**
	 * Translate from *another* alphabet or base to *this* base.
	 * @param str The string to translate.
	 * @param from The base of alphabet to translate from.
	 */
	public from (str: string, from: Base | string): string
	{
		return translate(str, from instanceof Base ? from.alphabet : from, this.alphabet);
	}
	
}
