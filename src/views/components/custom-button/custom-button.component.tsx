import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
