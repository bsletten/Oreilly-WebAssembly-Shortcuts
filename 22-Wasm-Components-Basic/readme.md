# Create WebAssembly Components with wasm-tools

In order to work with the files in this Shortcut, you will need a
[Rust](https://www.rust-lang.org) toolchain installed. The easiest way
to manage your Rust installations is with the
[rustup](https://rustup.rs) tool. The installation instructions are
maintained there.

You will also need wasm-tools installed.

```console
cargo install wasm-tools
```

You will also need wasmtime installed.

That can be installed with this:

```console
curl https://wasmtime.dev/install.sh -sSf | bash
```

Or from pre-compiled releases:

https://github.com/bytecodealliance/wasmtime/releases

If you want to try the example in another WASI-aware container, you may wish to have Wasmer installed as well:

```console
curl https://get.wasmer.io -sSfL | sh
```
