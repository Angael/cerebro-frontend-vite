import React, { ComponentProps } from 'react';
import { Icon } from '@mdi/react';
import { mdiAlertOutline } from '@mdi/js';
import css from './IconWithText.module.scss';

type Props = ComponentProps<'div'> & {
  text: string;
};

const IconWithText = ({ text, ...props }: Props) => {
  return (
    <div className={css.iconWithText} {...props}>
      <Icon path={mdiAlertOutline} size={2} />
      <p className='h4'>{text}</p>
    </div>
  );
};

export default IconWithText;
