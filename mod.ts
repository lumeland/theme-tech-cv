import plugins, { Options } from "./plugins.ts";
import "lume/types.ts";

export default function (options?: Options) {
  return (site: Lume.Site) => {
    site.use(plugins(options));

    // Add remote files
    site.remote("/_components/", import.meta.resolve("./_components/"), ["**/*"]);
  };
}
