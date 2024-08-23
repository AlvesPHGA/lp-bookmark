import { VariantProps } from 'tailwind-variants';
import { blueBack, container, cta, link } from './componentsGlobalStyle';
import React from 'react';

export interface ContainerProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof container> {}

export interface LinkProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof link> {}

export interface BlueBackProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof blueBack> {}
