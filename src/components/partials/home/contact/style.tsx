import { tv } from 'tailwind-variants';

export const contact = tv({
   slots: {
      section: 'bg-blue-600 py-24 lg:py-16',
      container:
         'max-w-7xl flex justify-between mx-auto relative z-10 lg:max-w-4xl md:w-full md:px-6 ml:px-4 flex-col',
      texts_box:
         'text-white font-medium w-4/12 text-center space-y-5 mx-auto lg:space-y-3 ml:w-full',
      legend: 'uppercase text-base',
      form: 'flex items-start gap-3 mx-auto mt-10 ml:flex-col',
      input_box: 'space-y-0.5 bg-white rounded-md border w-80',
      input_field: 'flex gap-2 items-center',
      input: 'py-2 pl-2 w-64 border-none outline-none rounded-l-md',
      alert: 'py-0.5 px-3 text-base text-white font-medium rounded-[50%] text-wrap bg-red-500 mr-1',
   },

   variants: {
      default: {
         false: {
            input_box: 'border-white',
         },
      },

      error: {
         true: {
            input_box: 'border-red-500',
         },
      },
   },
});
