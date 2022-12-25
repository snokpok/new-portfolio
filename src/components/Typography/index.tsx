import React from "react";

interface TypographyProps extends React.PropsWithChildren<any> {
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={`font-extrabold text-4xl ${className}`}>{children}</h1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={`font-extrabold text-2xl ${className}`}>{children}</h2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={`font-extrabold text-xl ${className}`}>{children}</h3>
);

export const Text = ({ children, className }: TypographyProps) => (
  <p className={`text-lg ${className}`}>{children}</p>
);
