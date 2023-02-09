import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Clients } from "../types/clients";
import { CreateClient } from "./CreateClient";
import { Header } from "./Header";

const ClientPage = () => {
  const [clients, setClients] = useState<Clients[] | null>();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  return (
    <>
    <Header page="Clientes"/>
    <div className="container">
      <div className="clientsPage-container"></div>
      <button className="add-client-btn" onClick={handleClick}>
        Adicionar Cliente
      </button>
      <button className="getOne-clientbtn">Buscar Cliente</button>
      {toggle && <CreateClient />}
      <div className="clients-options-container">
        <ul>
          {clients?.map((client) => {
            return (
              <div className="clients-info">
                <li>
                  <div className="client-profile">
                    <p>{client.name}</p>
                    <p>{client.phone}</p>
                    <p>{client.email}</p>
                    <div className="client-address">
                      <p>{client.street}</p>
                      <p>{client.number}</p>
                      <p>{client.district}</p>
                      {/* <button onClick={() => seeDetails(client.name)}>
                        Ver detalhes
                      </button>
                      <button onClick={() => deleteClient(client.id)}>
                        Deletar cliente
                      </button> */}
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
    </>
  );
};

export { ClientPage };
