import { ReactComponent as LgTypesript } from "assets/logos/typescript.svg";
import { ReactComponent as LgAngular } from "assets/logos/angular.svg";
export type LogoType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export { LgTypesript, LgAngular };
