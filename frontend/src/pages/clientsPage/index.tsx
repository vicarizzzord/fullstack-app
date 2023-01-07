import { getClient, getClients } from "../../services/clientsService"



const ClientPage = () => {
    const clients = getClients()

    return (
        <>
        <h1>Clients</h1>
        <div className="clients-container">
            <ul>
                
                {clients?.map(client => {
                    return(
                        <>
                        <li>
                            <p>{client.name}</p>
                            <p>{client.phone}</p>
                        </li>
                        </>
                    )
                })}
            </ul>
        </div>
        <a href="/">Voltar ao menu principal</a>
        </>
    )
}

export { ClientPage }