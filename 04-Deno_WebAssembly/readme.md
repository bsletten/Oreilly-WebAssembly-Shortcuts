# Call WebAssembly Code from Deno

As mentioned in this Shortcut, [Node.js](https://nodejs.org) also supports WebAssembly. If
you would prefer to use that, you should be able to set things up
using the add.wasm module using [these instructions](https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly). You will have to use JavaScript, not
TypeScript as we do in main-server.ts, but, again, you should be able
to make that work.

I have chosen [Deno](https://deno.com) over Node.js because I prefer its security module,
tooling, support for TypeScript, standard library, etc.

Installation instructions for Deno can be found [here](https://docs.deno.com/runtime/manual/getting_started/installation).