import React from "react";
import { ThemeStateContext } from "../../common/theme.context";

type InlineLinkProps = React.AnchorHTMLAttributes<any> & {
  showArrowOnHover?: boolean;
  color?: string;
};

export const InlineLink: React.FC<InlineLinkProps> = (
  props: InlineLinkProps
) => {
  const [hovered, setHover] = React.useState<boolean>(false);
  const { theme } = React.useContext(ThemeStateContext);

  const handleMouseOut = () => setHover(false);
  const handleMouseIn = () => setHover(true);

  const color = props.color ?? "green";

  return (
    <a
      {...props}
      className={`group ${
        theme.darkMode
          ? `hover:bg-${color}-600 text-${color}-400`
          : `hover:bg-${color}-800 text-${color}-700`
      } hover:text-white transition font-bold`}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      {props.children}
      {props.showArrowOnHover && hovered && <span>{"↑"}</span>}
    </a>
  );
};
