'use server';

import errorAlert from './error';

export default async function contactInput(state: {}, form: FormData) {
   const useremail = form.get('email') as string | null;

   try {
      if (!useremail) throw new Error("whoops, make sure it's an email.");

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch('http://localhost:3333/email', {
         method: 'POST',
         body: JSON.stringify({ useremail }),
      });

      if (!res.ok) throw new Error('Please, try latter.');

      const data = await res.json();

      return { data: null, ok: false, error: '' };
   } catch (error) {
      return errorAlert(error);
   }
}
