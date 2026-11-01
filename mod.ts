import basePath from "@lumeland/plugin-base-path";
import icons from "@lumeland/plugin-icons";
import googleFonts from "@lumeland/plugin-google-fonts";
import inline from "@lumeland/plugin-inline";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

export interface Options {
  fonts?: string;
}

export default function (options?: Options) {
  const fonts =
    options?.fonts ??
    "https://fonts.google.com/share?selection.family=Geist+Mono:ital,wght@0,100..900;1,100..900";

  return (site: Lume.Site) => {
    site.add("style.css");
    site.add("files");
    site.use(icons());
    site.use(googleFonts({ fonts }));
    site.use(basePath());
    site.use(inline());
    site.use(lumeCms({ cms }));

    // Add remote files
    site.remote("/", import.meta.resolve("./src"), ["_components/**"]);
  };
}

export const setup: Lume.Archetype = function* () {
  yield {
    url: import.meta.resolve("./src"),
    files: ["_data/*", "style.css", "index.vto", "files/*"],
  };
};
