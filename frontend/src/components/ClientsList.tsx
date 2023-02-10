import { useEffect, useState } from "react";
import { Clients } from "../types/clients";
import { CreateClient } from "./CreateClient";
import { Header } from "./Header";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { api } from "../libs/axios";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  AiOutlineUser,
  AiFillPhone,
  AiOutlineFieldNumber,
} from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import { BsFillHouseFill } from "react-icons/bs";
import { TbBuildingCommunity } from "react-icons/tb";

const ClientPage = () => {
  const [clients, setClients] = useState<Clients[] | null>();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  useEffect(() => {
    api.get("/clients").then((response) => {
      setClients(response.data);
    });
  }, []);

  return (
    <>
      <Header page="Clientes" />
      <div className="ml-1 w-full h-full">
        <div className="w-full h-64">
          <div className="w-full">
            <div className="">
              <div className="flex my-1">
                <Dialog.Root>
                  <Dialog.Trigger>
                    <button
                      className="w-40 h-12 flex items-center  bg-zinc-600 border-zinc-800 rounded-l-xl transition-colors hover:bg-green-600"
                      onClick={handleClick}
                    >
                      <div className="mx-3">
                        <FiUserPlus />
                      </div>
                      Novo Cliente
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0">
                      <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 transitions-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                          <X size={24} aria-label="Fechar" />
                        </Dialog.Close>
                        <CreateClient />
                      </Dialog.Content>
                    </Dialog.Overlay>
                  </Dialog.Portal>
                  <button className="w-40 h-12 flex items-center bg-zinc-600 border-zinc-800 rounded-r-xl transition-colors hover:bg-green-600">
                    <div className="mx-3">
                      <HiOutlineSearch />
                    </div>
                    Buscar Cliente
                  </button>
                </Dialog.Root>
              </div>
            </div>
          </div>
          {clients?.map((client) => {
            return (
              <ul key={client.id!}>
                <div className="w-full hover:bg-green-600 transition-colors">
                  <li className="border-zinc-600 border-2">
                    <div className="w-full p-3">
                      <label className="font-bold">Informações</label>
                      <p className="flex items-center">
                        <div className="mr-3">
                          <AiOutlineUser />
                        </div>
                        {client.name}
                      </p>
                      <p className="flex items-center">
                        <div className="mr-3">
                          <AiFillPhone />
                        </div>
                        {client.phone}
                      </p>
                      <p className="flex items-center">
                        <div className="mr-3">
                          <CiAt />
                        </div>
                        {client.email}
                      </p>
                      <div className="mt-4">
                        <label className="font-bold">Endereço</label>
                        <p className="flex items-center">
                          <div className="mr-3">
                            <BsFillHouseFill />
                          </div>
                          {client.street}
                        </p>
                        <p className="flex items-center">
                          <div className="mr-3">
                            <AiOutlineFieldNumber />
                          </div>
                          {client.number}
                        </p>
                        <p className="flex items-center">
                          <div className="mr-3">
                            <TbBuildingCommunity />
                          </div>
                          {client.district}
                        </p>
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
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { ClientPage };
