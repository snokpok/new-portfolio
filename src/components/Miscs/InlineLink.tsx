import React from "react";
import { ThemeStateContext } from "../../common/theme.context";

type InlineLinkProps = React.AnchorHTMLAttributes<any> & {
  showArrowOnHover?: boolean;
};

export const InlineLink: React.FC<InlineLinkProps> = (
  props: InlineLinkProps
) => {
  const [hovered, setHover] = React.useState<boolean>(false);
  const { theme } = React.useContext(ThemeStateContext);

  const handleMouseOut = () => setHover(false);
  const handleMouseIn = () => setHover(true);

  return (
    <a
      {...props}
      className={`group ${
        theme.darkMode
          ? "hover:bg-green-600 text-green-400"
          : "hover:bg-green-800 text-green-700"
      } hover:text-white transition font-bold`}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      {props.children}
      {props.showArrowOnHover && hovered && <span>{"↑"}</span>}
    </a>
  );
};
