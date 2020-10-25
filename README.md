# Base

A tool to encode 6 decode from & to different alphabets.

## Usage

```ts
// Imports
import { Base } from "https://deno.land/x/base/mod.ts";

// Create a new base.
const binary = new Base("01");

// Encode some data.
binary.encode(123);
// => "1111011"

// Decode some data.
binary.decode("1111011");
// => 123
```

Base comes prebundled with these bases:

- `base2` or `binary`
- `base8` or `octal`
- `base16` or `hex`
- `base32`
- `base36`
- `base62`
