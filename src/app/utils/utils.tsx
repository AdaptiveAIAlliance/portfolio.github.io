// import { config } from "../../configs/config";
import { config } from "../../../next.config.mjs";
export const assetPathResolver = (src: string): string =>
  config.basePath && config.isProd ? config.basePath + src : src;
