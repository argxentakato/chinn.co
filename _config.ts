import lume from "lume/mod.ts";
import inline from "lume/plugins/inline.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";

const site = lume({
  location: new URL("https://chinn.co"),
});

site
  .ignore("README.md", "LICENSE", "deno.json", "deno.lock")
  .copy("static")
  .use(inline())
  .use(sitemap())
  .use(source_maps());

export default site;
