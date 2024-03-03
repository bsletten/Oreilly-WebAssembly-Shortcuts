import { retrieve } from "./pkg/fetch_from_deno.js";

retrieve("https://api.mailcheck.ai/domain/proton.me").then((data) => {
   console.log(data);
});

