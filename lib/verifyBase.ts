/**
 * Verify that there are no repeated characters in the
 * alphabet and the alphabet length greater than 1.
 * @param alphabet The alphabet.
 */
export function verifyAlphabet (alphabet: string): boolean
{
	return alphabet.length >= 2 && !/(.).*\1/.test(alphabet);
}
