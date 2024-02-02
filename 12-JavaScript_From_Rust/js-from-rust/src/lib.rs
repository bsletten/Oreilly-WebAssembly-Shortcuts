use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
   fn alert(s: &str);
}

#[wasm_bindgen]
pub fn say_hello(name: &str) {
   alert(&format!("Hello, {}!", name));
}