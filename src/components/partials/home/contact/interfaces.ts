export interface ContactButtonProps extends React.ComponentProps<'button'> {
   place: 'header' | 'contact';
   send: string;
   sending: string;
}
