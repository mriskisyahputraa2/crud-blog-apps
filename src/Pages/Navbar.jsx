function Navbar() {
    return <>
        <div className="w-full h-16 bg-blue-600 py-10 px-2 flex items-center justify-between">

            <div>
                <h1 className="font-Montserrat text-3xl font-semibold text-white">Crud</h1>
            </div>

            <div>
                <button className="w-48 bg-white text-blue-400 font-Poppins text-xl h-12 rounded-lg">Add Users</button>
            </div>
        </div>
    </>
}
export default Navbar