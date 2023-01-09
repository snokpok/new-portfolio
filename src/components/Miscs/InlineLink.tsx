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

  // have to do this to dynamically inject whole css tag
  const classNameLink = (color: string, darkMode: boolean) => {
    switch (color) {
      case "green":
        return darkMode
          ? `hover:bg-green-600 text-green-400`
          : `hover:bg-green-800 text-green-700`;

      case "blue":
        return darkMode
          ? `hover:bg-blue-600 text-blue-400`
          : `hover:bg-blue-800 text-blue-700`;
      case "yellow":
        return darkMode
          ? `hover:bg-yellow-600 text-yellow-400`
          : `hover:bg-yellow-800 text-yellow-700`;
      case "red":
        return darkMode
          ? `hover:bg-red-600 text-red-400`
          : `hover:bg-red-800 text-red-700`;
      case "indigo":
        return darkMode
          ? `hover:bg-indigo-600 text-indigo-400`
          : `hover:bg-indigo-800 text-indigo-700`;
      default:
        return "";
    }
  };

  return (
    <a
      {...props}
      className={`group ${classNameLink(
        color,
        theme.darkMode
      )} hover:text-white transition font-bold`}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      {props.children}
      {props.showArrowOnHover && hovered && <span>{"↑"}</span>}
    </a>
  );
};
