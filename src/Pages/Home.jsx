import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/users").then((response) => {
      setUser(response.data.reverse());
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col px-10 py-16">
      <div class="relative overflow-x-auto font-Poppins">
        <div className="pb-16 text-center">
          <h1 className="font-Poppins text-3xl">Home Page</h1>
        </div>

        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
          <thead className="text-xs text-gray-50 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <th
                  scope="row"
                  className="text-lg px-6 py-4 whitespace-nowrap dark:text-white">
                  {index + 1}
                </th>
                <td className="text-lg px-6 py-4">{user.name}</td>
                <td className="text-lg px-6 py-4">{user.email}</td>
                <td className="text-lg px-6 py-4">{user.phone}</td>
                <td className="flex justify-center items-center space-x-4 ">
                  <Link
                    to={`/detail-user/${user.id}`}
                    className="px-6 py-2 bg-gray-900/75 text-white rounded-lg mt-2">
                    Detail
                  </Link>
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-2">
                    Edit
                  </button>
                  <button className="px-6 py-2 bg-red-500 text-white rounded-lg mt-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
