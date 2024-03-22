import "styled-components";
import { BothMarginsInterface } from "./type/mainBody/mainBodyType";
declare module "styled-components" {
  export interface DefaultTheme extends BothMarginsInterface {}
}
