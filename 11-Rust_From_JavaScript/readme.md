# Use wasm-bindgen to call Rust from JavaScript (more easily).

You will need to install the wasm-bindgen and webpack tooling. You
don't need webpack to use wasm-bindgen, but it keeps things simple for
now. In future Shortcuts, we will revisit that dependency.

If you have the Rust tool chain installed, you can simply say:

```console
> cargo install wasm-bindgen-cli
```

For more information about installing the tools, check out the
[instructions](https://github.com/rustwasm/wasm-bindgen)

I have already done the following for this Shortcut, but the next step
would be to create your new project:

```console
> cargo new rust-from-js --lib 
```

This creates a library-oriented Cargo project. I've copied the add.rs
to src/lib.rs to keep things simple.

To install webpack:

```console
> npm install webpack --save-dev
```