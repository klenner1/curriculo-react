import { ReactComponent as IcMail } from "assets/icons/ic-mail.svg";
import { ReactComponent as IcLinkedin } from "assets/icons/ic-linkedin.svg";
import { ReactComponent as IcPhone } from "assets/icons/ic-phone.svg";
import { ReactComponent as IcPlace } from "assets/icons/ic-place.svg";
import { ReactComponent as IcGithub } from "assets/icons/ic-github.svg";

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export { IcLinkedin, IcMail, IcPhone, IcPlace, IcGithub };
