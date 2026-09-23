import lume from "lume/mod.ts";
import icons from "lume/plugins/icons.ts";
import fonts from "lume/plugins/google_fonts.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();

site.add("style.css");
site.add("files");
site.use(icons());
site.use(fonts({
  fonts: "https://fonts.google.com/share?selection.family=Geist+Mono:ital,wght@0,100..900;1,100..900"
}))
site.use(inline());

export default site;
