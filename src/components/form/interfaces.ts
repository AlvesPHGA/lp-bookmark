import { VariantProps } from 'tailwind-variants';
import { buttonStyle } from './formStyles';

export interface ButtonProps
   extends React.ComponentProps<'button'>,
      VariantProps<typeof buttonStyle> {}

export interface FieldInputProps extends React.ComponentProps<'input'> {
   name: string;
   aria: string;
   alert: boolean;
}
