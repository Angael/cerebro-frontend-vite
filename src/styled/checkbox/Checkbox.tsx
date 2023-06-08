import React, { ComponentPropsWithRef } from 'react';
import css from './Checkbox.module.scss';
import { styled } from '../styled';

export default styled('input', css.checkbox, {
  type: 'checkbox',
});
