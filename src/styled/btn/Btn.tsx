import React from 'react';

import css from './Btn.module.scss';
import { styled } from '../styled';
import { NavLink } from 'react-router-dom';

export const Btn = styled('button', css.btnStyle);
export const BtnA = styled('a', css.btnStyle);
export const BtnNavlink = styled(NavLink, css.btnStyle);
