# Use wasm-bindgen to Call Rust from Deno

In order to work with the files in this Shortcut, you will need a
[Rust](https://www.rust-lang.org) toolchain installed. The easiest way
to manage your Rust installations is with the
[rustup](https://rustup.rs) tool. The installation instructions are
maintained there.

You will also need to install the wasm-bindgen if you have not already
done so.

If you have the Rust tool chain installed, you can simply say:

```console
> cargo install wasm-bindgen-cli
```

For more information about installing the tools, check out the
[instructions](https://github.com/rustwasm/wasm-bindgen)

I have already done the following for this Shortcut, but the next step
would be to create your new project:

```console
> cargo new deno_and_rust --lib 
```

This creates a library-oriented Cargo project. I've modified the
src/lib.rs file as detailed in the Shortcut.
