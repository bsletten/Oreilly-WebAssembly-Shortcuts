const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const instantiateCore = WebAssembly.instantiate;

function toInt32(val) {
  return val >> 0;
}

let exports0;

function add(arg0, arg1) {
  const ret = exports0.add(toInt32(arg0), toInt32(arg1));
  return ret;
}

const $init = (async() => {
  const module0 = fetchCompile(new URL('./add.core.wasm', import.meta.url));
  ({ exports: exports0 } = await instantiateCore(await module0));
})();

await $init;

export { add,  }