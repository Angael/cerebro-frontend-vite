import React, { ComponentPropsWithRef } from 'react';
import css from './Checkbox.module.scss';
import { styled } from '../styled';

export default styled<ComponentPropsWithRef<'input'>>('input', css.checkbox, {
  type: 'checkbox',
});
