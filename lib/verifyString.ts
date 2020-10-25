/**
 * Verify that the characters used in a string also exists
 * in the alphabet.
 * @param str The string to vet.
 * @param alphabet The alphabet.
 */
export function verifyString (str: string, alphabet: string): boolean
{
	for (let i: number = 0; i < str.length; i++)
	{
		const index = alphabet.indexOf(str[i]);
		if (index === undefined || index === -1)
			return false;
	}
	return true;
}
