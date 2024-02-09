export function Input() {
   return (
      <div className="w-[40%] mx-auto mt-10 flex justify-between">
         <input
            className="w-[68%] py-[2px] px-2 rounded-md text-base"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
         />
         <button className="w-fit px-5 py-2 bg-softRed text-white text-base rounded-md border-2 border-softRed hover:bg-white hover:text-softRed transition-all">
            Contact Us
         </button>
      </div>
   );
}
