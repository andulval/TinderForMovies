/// <reference types="vite/client" />
declare module "*.svg" {
  import { FC, SVGProps } from "react";
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
