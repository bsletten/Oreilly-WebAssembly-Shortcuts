use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
   #[wasm_bindgen(js_namespace=console)]
   fn log(s: &str);
}

#[wasm_bindgen(start)]
fn run() -> Result<(), JsValue> {
   log("Beginning to modify the DOM!");

   let window = web_sys::window().expect("cannot retrieve the window");
   let document = window.document().expect("cannot retrieve document from the window");
   let body = document.body().expect("cannot retrieve the body from the document");


   let val = document.create_element("p")?;
   val.set_text_content(Some("Rust modified the DOM!"));

   body.append_child(&val)?;

   log("Finished modifying the DOM!");
   Ok(())
}