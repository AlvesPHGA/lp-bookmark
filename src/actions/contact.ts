'use server';

import errorAlert from './error';

interface StateProps {
   message: string | undefined | null;
   success: boolean;
}

export default async function contactInput(state: StateProps, form: FormData) {
   const useremail = form.get('email')?.toString();

   try {
      if (!useremail) {
         return {
            success: false,
            message: "whoops, make sure it's an email.",
         };
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch('http://localhost:3333/email', {
         method: 'POST',
         body: JSON.stringify({ useremail }),
      });

      if (!res.ok) {
         return {
            success: false,
            message: 'Please, try latter.',
         };
      }

      return { success: true, message: '' };
   } catch (error) {
      console.log(error);
   }

   return {
      success: true,
      message: '',
   };

   // try {
   //    if (!useremail) throw new Error("whoops, make sure it's an email.");

   //    await new Promise((resolve) => setTimeout(resolve, 3000));

   //    const res = await fetch('http://localhost:3333/email', {
   //       method: 'POST',
   //       body: JSON.stringify({ useremail }),
   //    });

   //    if (!res.ok) throw new Error('Please, try latter.');

   //    const data = await res.json();

   //    return { data: null, ok: false, error: '' };
   // } catch (error) {
   //    return errorAlert(error);
   // }
}
