// Imports
import { Base } from "./Base.ts";
import {
	_base2,
	_base8,
	_base10,
	_base16,
	_base32,
	_base36,
	_base62
} from "./constants.ts";

export const base2 = new Base(_base2);
export const binary = base2;
export const base8 = new Base(_base8);
export const octal = base8;
export const base10 = new Base(_base10);
export const denary = base10;
export const base16 = new Base(_base16);
export const hex = base16;
export const base32 = new Base(_base32);
export const base36 = new Base(_base36);
export const base62 = new Base(_base62);
