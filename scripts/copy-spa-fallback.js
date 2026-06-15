// GitHub Pages has no server-side routing, so deep links (e.g. /projects/foo)
// 404 on refresh. Copying index.html to 404.html lets GitHub Pages serve the
// app shell for any unknown path, and React Router takes over from there.
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
