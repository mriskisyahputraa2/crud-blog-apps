import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailUsers() {
  const { id } = useParams(); // ambil id berdasarakan param url

  const [DetailUser, setDetailUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((response) => {
      setDetailUser(response.data);
    });
  }, []);

  return (
    <>
      {DetailUser && (
        <>
          <div className="max-w-screen-sm flex justify-center flex-col border border-black mx-auto my-16 rounded bg-gray-900/60 ">
            <div className="text-white text-center text-3xl font-Poppins mt-4">
              <h1>Detail Users</h1>
            </div>

            <div className="flex flex-col px-10 mb-10 text-white">
              <h3 className="border-b border-white text-xl mt-5 font-bold font-Poppins">
                Name:{" "}
                <b className="font-mono font-normal text-green-500">
                  {" "}
                  {DetailUser.name}
                </b>
              </h3>
              <h3 className="border-b border-white text-xl mt-5 font-bold font-Poppins">
                Email:
                <b className="font-mono font-normal text-green-500">
                  {" "}
                  {DetailUser.email}
                </b>
              </h3>
              <h3 className="border-b border-white text-xl mt-5 font-bold font-Poppins">
                Phone:
                <b className="font-mono font-normal text-green-500">
                  {" "}
                  {DetailUser.phone}
                </b>
              </h3>
            </div>
          </div>
          <div className="text-center">
            <Link
              to={"/"}
              className="bg-blue-500 text-white py-3 px-7 rounded-lg font-Poppins">
              Back to Home
            </Link>
          </div>
        </>
      )}
    </>
  );
}
export default DetailUsers;
