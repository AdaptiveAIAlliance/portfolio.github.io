import { config } from "../../consts/config";

export const assetPathResolver = (src: string): string =>
  config.basePath ? config.basePath + src : src;
