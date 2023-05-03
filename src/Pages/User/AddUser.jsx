import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="w-screen h-full my-10 flex flex-col justify-center mx-auto">
        <div>
          <h1 className="text-center text-4xl font-Montserrat uppercase">
            Add User
          </h1>
        </div>

        <div className="flex flex-col justify-center mx-auto my-5 font-Poppins">
          <form className="flex flex-col  ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="text"
              placeholder="Enter your Name..."
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="text"
              placeholder="Enter your Email..."
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-black/80 p-3 w-[600px] mt-5 rounded"
              type="text"
              placeholder="Enter your Phone..."
            />
          </form>

          <div className="mt-5">
            <button className="bg-blue-600 text-white w-full p-3 rounded">
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
