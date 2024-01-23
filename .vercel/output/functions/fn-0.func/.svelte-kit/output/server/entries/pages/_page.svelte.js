import { c as create_ssr_component } from "../../chunks/index2.js";
import "sse.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Give two contrasting takes</h1>
<form><label for="${"context"}">Enter text to generate contrasting takes (if rate limit is for openAPI calls generate button may not work)</label>
	<textarea name="${"context"}" rows="${"5"}">${""}</textarea>
	<button>Explain it</button>
	<div class="${"pt-4"}"><h2>Explanation:</h2>
		${``}</div></form>`;
});
export {
  Page as default
};
