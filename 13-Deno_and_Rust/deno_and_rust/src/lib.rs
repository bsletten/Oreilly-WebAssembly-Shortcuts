use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/hr.js")]
extern "C" {
   type Employee;

   #[wasm_bindgen(constructor)]
   fn new() -> Employee;

   #[wasm_bindgen(method, getter)]
   fn name(this: &Employee) -> String;
   #[wasm_bindgen(method, setter)]
   fn set_name(this: &Employee, empname: String) -> Employee;
   #[wasm_bindgen(method)]
   fn introduce(this: &Employee) -> String;
}


#[wasm_bindgen]
extern "C" {
   #[wasm_bindgen(js_namespace = console)]
   fn log(s: &str);
}

#[wasm_bindgen(inline_js =
    "export function test() { console.log('Testing!'); }")]
extern "C" {
   fn test();
}

#[wasm_bindgen]
pub fn hire(name: String) {
   let emp = Employee::new();
   emp.set_name(name);
   test();
   log(&emp.introduce());
}
