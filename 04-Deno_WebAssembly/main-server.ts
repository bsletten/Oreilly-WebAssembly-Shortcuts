const wasmCode = await Deno.readFile("./add.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const add = wasmInstance.exports.add as CallableFunction

Deno.serve((req) => {
  let bodyContent = "2 + 3 = " + add(2,3);
  return new Response(bodyContent);
});

console.log(`HTTP webserver running.  Access it at:  http://localhost:8000/`);

