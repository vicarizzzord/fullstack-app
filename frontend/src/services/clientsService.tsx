import axios from "axios"
import { useEffect, useState } from "react"
import { Clients } from "../types/clients"

const getClient = () => {


}

const deleteClient = () => {

}

const createClient = (request) => {


    useEffect( () => {
        axios.post(`http://localhost:3000/clients/${request.email}`)
    }).then(response => {
        
    })
}

const getClients = () => {
    const [data, setData] = useState<Clients[] | null>(null)

    useEffect(() => {
        axios.get("http://localhost:3000/clients",{
            data: null
        })
            .then(response => {
                setData(response.data)
            })
            // console.log(data)
    }, [])
    return data
}






export { getClient, deleteClient, createClient, getClients }