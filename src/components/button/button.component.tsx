import { FC, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  AcceptButton,
  RejectButton,
  ButtonSpinner,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  accept = "accept",
  reject = "reject",
}

const getButton = ( //return sstyled component from available options
  buttonType = BUTTON_TYPE_CLASSES.base
): React.ComponentType<ButtonHTMLAttributes<HTMLButtonElement>> =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.accept]: AcceptButton,
    [BUTTON_TYPE_CLASSES.reject]: RejectButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
export default Button;