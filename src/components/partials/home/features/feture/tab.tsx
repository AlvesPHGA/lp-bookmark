import React from 'react';
import { featuresTab } from '../style';

interface TabProps extends React.ComponentProps<'button'> {}

const { tab } = featuresTab();

export function Tab({ children }: TabProps) {
   return <button className={tab()}>{children}</button>;
}
