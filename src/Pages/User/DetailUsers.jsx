import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailUsers() {
    const { id } = useParams() // ambil id berdasarakan param url 

    const [DetailUser, setDetailUser] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3003/users/${id}`)
            .then((response) => {
                setDetailUser(response.data);
            })
    }, [])


    return <>
        {console.log(DetailUser)}
        Detail User
    </>
}
export default DetailUsers