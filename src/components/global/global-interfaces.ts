import { VariantProps } from 'tailwind-variants';
import { container, link } from './componentsGlobalStyle';

export interface ContainerProps
   extends React.ComponentProps<'div'>,
      VariantProps<typeof container> {}

export interface LinkProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof link> {}
