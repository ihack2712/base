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
	
	/**
	 * Encode some big integer into a string using a base.
	 * @param num The big integer.
	 * @param base The base to encode the big integer into.
	 */
	public static encode (num: Big, base: Base): string;
	
	/**
	 * Encode some big integer into a string using an alphabet.
	 * @param num The big integer.
	 * @param alphabet The alphabet to encode the big integer into.
	 */
	public static encode (num: Big, alphabet: string): string;
	
	/**
	 * Encode some big integer into a string using an alphabet or a
	 *  base.
	 * @param num The big integer.
	 * @param baseOrAlphabet The base or alphabet to encode the big
	 *  integer into.
	 */
	public static encode (num: Big, baseOrAlphabet: Base | string): string
	{
		return encode(
			num,
			baseOrAlphabet instanceof Base
				? baseOrAlphabet.alphabet
				: baseOrAlphabet
		);
	}
	
	/**
	 * Decode some string into a big integer using a base.
	 * @param str The string.
	 * @param base The base to decode from.
	 */
	public static decode (num: Big, base: Base): bigint;
	
	/**
	 * Decode some string into a big integer using an alphabet.
	 * @param str The string.
	 * @param alphabet The alphabet to decode from.
	 */
	public static decode (num: Big, alphabet: string): bigint;
	
	/**
	 * Decode some string into a big integer using a base or
	 *  alphabet.
	 * @param str The string.
	 * @param baseOrAlphabet The base to decode from.
	 */
	public static decode (str: string, baseOrAlphabet: Base | string): bigint
	{
		return decode(
			str,
			baseOrAlphabet instanceof Base
				? baseOrAlphabet.alphabet
				: baseOrAlphabet
		);
	}
	
	/**
	 * Translate some encoded string into another base or alphabet.
	 * @param str The encoded string.
	 * @param fromBaseOrAlphabet The base or alphabet to translate
	 *  from.
	 * @param toBaseOrAlphabet The base or alphabet to translate to.
	 */
	public static translate (str: string, fromBaseOrAlphabet: Base | string, toBaseOrAlphabet: Base | string): string
	{
		return translate(
			str,
			fromBaseOrAlphabet instanceof Base
				? fromBaseOrAlphabet.alphabet
				: fromBaseOrAlphabet
				,
			toBaseOrAlphabet instanceof Base
				? toBaseOrAlphabet.alphabet
				: toBaseOrAlphabet
		);
	}
	
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
		return Base.encode(num, this);
	}
	
	/**
	 * Decode a string from *this* base.
	 * @param str The string to decode.
	 */
	public decode (str: string): bigint
	{
		return Base.decode(str, this);
	}
	
	/**
	 * Translate from *this* base to another base or alphabet.
	 * @param str The string to translate.
	 * @param to The base or alphabet to translate to.
	 */
	public translate (str: string, to: Base | string): string
	{
		return Base.translate(str, this, to);
	}
	
	/**
	 * Translate from *another* alphabet or base to *this* base.
	 * @param str The string to translate.
	 * @param from The base of alphabet to translate from.
	 */
	public from (str: string, from: Base | string): string
	{
		return Base.translate(str, from, this);
	}
	
}
