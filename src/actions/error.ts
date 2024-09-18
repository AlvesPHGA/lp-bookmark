export default function errorAlert(error: unknown): {
   data: null;
   ok: boolean;
   error: string;
} {
   if (error instanceof Error) {
      return {
         data: null,
         ok: true,
         error: error.message,
      };
   } else {
      return {
         data: null,
         ok: false,
         error: 'Generic Error',
      };
   }
}
