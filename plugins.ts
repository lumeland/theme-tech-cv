import "lume/types.ts";

import icons from "lume/plugins/icons.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import inline from "lume/plugins/inline.ts";

export interface Options {
  fonts?: string;
}

export default function (options?: Options) {
  const fonts = options?.fonts ?? "https://fonts.google.com/share?selection.family=Geist+Mono:ital,wght@0,100..900;1,100..900";

  return (site: Lume.Site) => {
    site.add("style.css");
    site.add("files");
    site.use(icons());
    site.use(googleFonts({ fonts }))
    site.use(inline());
  }
}
