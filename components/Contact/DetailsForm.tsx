export default function DetailsForm() {
  return (
    <form className="pt-[100px] grid grid-cols-2 gap-[50px] max-w-[1000px] mx-auto max-md:grid-cols-1 max-md:gap-7 max-md:pt-16 max-md:pb-0">
      <div>
        <h6 className="subtitle mb-3">Full name *</h6>
        <input
          placeholder="John David"
          className="py-4 pl-6 w-full border border-[#DCDCDC] placeholder:menu menu placeholder:text-[#555555] focus:outline-0
            rounded-[7px] hover:placeholder:text-[#555555] text-[#555555] hover:text-[#555555]"
        />
      </div>
      <div>
        <h6 className="subtitle mb-3">Your email *</h6>
        <input
          placeholder="example@yourmail.com"
          className="py-4 pl-6 w-full border border-[#DCDCDC] placeholder:menu menu placeholder:text-[#555555] focus:outline-0
            rounded-[7px] hover:placeholder:text-[#555555] text-[#555555] hover:text-[#555555]"
        />
      </div>
      <div>
        <h6 className="subtitle mb-3">Company *</h6>
        <input
          placeholder="your company name"
          className="py-4 pl-6 w-full border border-[#DCDCDC] placeholder:menu menu placeholder:text-[#555555] focus:outline-0
            rounded-[7px] hover:placeholder:text-[#555555] text-[#555555] hover:text-[#555555]"
        />
      </div>
      <div>
        <h6 className="subtitle mb-3">Subject *</h6>
        <input
          placeholder="How can we Help"
          className="py-4 pl-6 w-full border border-[#DCDCDC] placeholder:menu menu placeholder:text-[#555555] focus:outline-0
            rounded-[7px] hover:placeholder:text-[#555555] text-[#555555] hover:text-[#555555]"
        />
      </div>
      <div className="col-span-full">
        <h6 className="subtitle mb-3">Message *</h6>
        <textarea
          rows={8}
          placeholder="Hello there,I would like to talk about how to..."
          className="py-4 pl-6 w-full border border-[#DCDCDC] placeholder:menu menu placeholder:text-[#555555] focus:outline-0
            rounded-[7px] hover:placeholder:text-[#555555] text-[#555555] hover:text-[#555555]"
        />
      </div>
      <button className="btn-black w-fit mx-auto col-span-full">
        Sent Message
      </button>
    </form>
  );
}
