import { Handlebars } from "https://deno.land/x/handlebars/mod.ts";

const handle = new Handlebars({
    baseDir: 'views',
    extname: '.hbs',
    layoutsDir: 'layouts/',
    partialsDir: 'partials/',
    defaultLayout: 'main',
    helpers: undefined,
    compilerOptions: undefined,
});

export {handle, Handlebars};