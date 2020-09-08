import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  const { value } = props;
  return (
    <GroupContainer>
      <FormInputContainer onChange={() => { }} {...props} />
      {label ? (
        <FormInputLabel className={value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
