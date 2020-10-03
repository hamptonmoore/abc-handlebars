import { Application } from "https://deno.land/x/abc@v1.0.3/mod.ts";

const app = new Application();

import routeIndex from "./routes/index.ts";

app
    .get("/:name", routeIndex)
    .static("/", "public")
    .start({ port: 8080 });

console.log("Starting");