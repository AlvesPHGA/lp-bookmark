import { VariantProps } from 'tailwind-variants';
import { blueBack, cta, link } from './componentsGlobalStyle';
import React from 'react';

export interface LinkProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof link> {
   active?: boolean;
   closeMenuHamburger?: () => void;
}

export interface BlueBackProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof blueBack> {}

export interface CTAProps
   extends React.HtmlHTMLAttributes<'a'>,
      VariantProps<typeof cta> {}
