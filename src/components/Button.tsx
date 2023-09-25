import React from "react";
import { JsxElement } from "typescript";

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /**
   * Function is called whenever a enter is pressed on the button when focused with tab
   */
  onEnterWhenTabbed?: (event: React.KeyboardEvent) => void;
}

const Button = ({
  onEnterWhenTabbed,
  children,
  ...otherProps
}: IButtonProps) => {
  return (
    <button
      onKeyDown={(event) => {
        event.key === "Enter" && onEnterWhenTabbed && onEnterWhenTabbed(event);
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
