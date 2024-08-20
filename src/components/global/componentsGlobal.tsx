import React from 'react';
import { container } from './componentsGlobalStyle';

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ children }: ContainerProps) {
   return <div className={container()}>{children}</div>;
}
