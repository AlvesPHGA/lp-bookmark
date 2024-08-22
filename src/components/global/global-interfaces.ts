import { VariantProps } from 'tailwind-variants';
import { link } from './componentsGlobalStyle';

export interface ContainerProps extends React.ComponentProps<'div'> {}

export interface LinkProps
   extends React.ComponentProps<'a'>,
      VariantProps<typeof link> {}
