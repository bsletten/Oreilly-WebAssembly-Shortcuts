# Use WASI and WebAssembly to Make Applications More Secure

This is basically the same directory structure as the 17-Wasi section. You can use either for the purposes of the Shortcut, but in case you did anything additional in the previous one, I wanted to give you a clean slate.

As I indicate in the Shortcut, you will need wasi-sdk installed to follow along. This is basically another clang installation that won't interfere with any installed versions. This is configured to emit WASI-enabled WebAssembly modules from C/C++ so that they will execute in WASI-aware environments.

The latest wasi-sdk at the moment is 21, but I think that brought some potentially problematic C++ changes so I encourage you to stick with the 20 release. You can download pre-compiled versions of that here:

https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-20

You will also need wasmtime installed.

That can be installed with this:

```console
curl https://wasmtime.dev/install.sh -sSf | bash
```

Or from pre-compiled releases:

https://github.com/bytecodealliance/wasmtime/releases

You may also want to use a toolkit called the WebAssembly Binary Toolkit (WABT).

It's GitHub repository is here: https://github.com/WebAssembly/wabt

The instructions for building directly from the source repository are listed there.

If you use Homebrew on either Linux or macOS, you can type:

```console
> brew install wabt
```


