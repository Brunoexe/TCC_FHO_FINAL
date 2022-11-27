declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  type Key = { key?: string };
  const content: React.FC<SvgProps & Key>;
  export default content;
}
declare module "*.jpg";
