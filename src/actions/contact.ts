'use server';

export default async function contactInput(form: FormData) {
   const useremail = form.get('email') as string | null;

   try {
      if (!useremail) throw new Error('preencher campo email corretamente');

      await new Promise((resolve) => setTimeout(resolve, 3000));

      await fetch('http://localhost:3333/email', {
         method: 'POST',
         body: JSON.stringify({ useremail }),
      });
   } catch (error) {
      console.log(error);
   }
}
