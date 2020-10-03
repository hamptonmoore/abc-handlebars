import type { Context } from "https://deno.land/x/abc@v1.0.3/mod.ts";
import {handle} from "../mods/handlebars.ts";

export default async function routeIndex(context: Context) {
    return handle.renderView("index", context.params);
}