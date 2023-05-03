import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full h-16 bg-blue-600 py-10 px-8 flex items-center justify-between">
        <div>
          <h1 className="font-Poppins text-3xl font-semibold text-white">
            Crud
          </h1>
        </div>

        <div>
          <Link
            to="add-user"
            className="flex justify-center items-center w-48 bg-white text-blue-400 font-Poppins text-xl h-12 rounded-lg">
            Add Users
          </Link>
        </div>
      </div>
    </>
  );
}
export default Navbar;
