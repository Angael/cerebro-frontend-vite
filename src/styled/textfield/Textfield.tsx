import React, { HTMLAttributes } from 'react';
import css from './Textfield.module.scss';
import { styled } from '../styled';

type Props = {
  label: string;
  input?: HTMLAttributes<HTMLInputElement>;
} & HTMLAttributes<HTMLLabelElement>;

const Input = styled('input', css.textfield);

const Textfield = ({ label, input, ...others }: Props) => {
  return (
    <label className={css.textfieldLabel} {...others}>
      <span className={css.labelText}>{label}</span>
      <Input {...input} />
    </label>
  );
};

export default Textfield;
