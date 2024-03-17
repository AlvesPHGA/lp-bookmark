import React from 'react';

type BackBlueProps = React.ComponentProps<'div'> & {
   className: string;
};

export function BackBlue({ className }: BackBlueProps) {
   return <div className={className}></div>;
}
