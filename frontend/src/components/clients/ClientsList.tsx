import { ChangeEvent, useEffect, useState } from "react";
import { Clients } from "../../types/clients";
import { Header } from "../Header";
import { api } from "../../libs/axios";
import {
  AiOutlineUser,
  AiFillPhone,
  AiOutlineFieldNumber,
} from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import { BsFillHouseFill } from "react-icons/bs";
import { TbBuildingCommunity } from "react-icons/tb";
import { ClientsTools } from "./ClientsTools";
import { FiEdit2 } from "react-icons/fi";
import { CgTrashEmpty } from "react-icons/cg";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

const ClientPage = () => {
  const [editingClient, setEditingClient] = useState<Clients>();
  const [clients, setClients] = useState<Clients[] | null>();
  const [fields, setFields] = useState<Clients>({});

  function reloadPage() {
    window.location.reload();
  }

  useEffect(() => {
    api.get("/clients").then((response) => {
      setClients(response.data);
    });
  }, []);

  const handleFields = (e: ChangeEvent<any>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handlerOnDelete = (id: string) => {
    api.delete(`/client/${id}`);
    reloadPage();
  };

  const getClient = (item: Clients) => {
    api.get(`/clients/${item.name}`).then((response) => {
      setEditingClient(response.data);
    });
  };

  const handlerOnUpdate = (id: string, data: Clients) => {
    api.patch(`client/${id}`, data);
    reloadPage();
  };

  const handleSubmit = () => {
    if (fields) setEditingClient(fields);
  };

  return (
    <>
      <Header page="Clientes" />
      <div className="w-screen h-screen justify-items-center bg-zinc-900">
        <ClientsTools />
        <ScrollArea.Root>
          {clients?.map((client) => {
            return (
              <ScrollArea.Viewport>
                <div className="w-80 h-64 ml-3">
                  <ul key={client._id}>
                    <div className="w-full">
                      <li className=" border-zinc-600 border-2 rounded-2xl  hover:bg-green-600 m-1">
                        <div className="flex h-0 ml-64">
                          <Dialog.Root>
                            <Dialog.Trigger>
                              <Dialog.Overlay>
                                <Dialog.Content>
                                  <Dialog.DialogContent>
                                    <Dialog.Close>
                                      <X size={25} aria-label="Fechar" />
                                    </Dialog.Close>
                                    <form
                                      onSubmit={handleSubmit}
                                      className="w-full flex flex-col mt-8"
                                    >
                                      <input
                                        placeholder="Nome"
                                        name="name"
                                        value={client.name}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                      <input
                                        placeholder="Email"
                                        name="email"
                                        value={client.email}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                      <input
                                        placeholder="Telefone"
                                        name="phone"
                                        value={client.phone}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                      <input
                                        placeholder="Rua"
                                        name="street"
                                        value={client.street}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                      <input
                                        placeholder="Número"
                                        name="number"
                                        value={client.number}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />

                                      <input
                                        placeholder="Bairro"
                                        name="district"
                                        value={client.district}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                      <input
                                        placeholder="CPF"
                                        name="cpf"
                                        value={client.cpf}
                                        type="text"
                                        onChange={handleFields}
                                        className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                                      />
                                    </form>
                                  </Dialog.DialogContent>
                                </Dialog.Content>
                              </Dialog.Overlay>
                              <button
                                title="Editar cliente"
                                className="pt-3 w-10 h-10"
                                onClick={() => getClient(client)}
                              >
                                <FiEdit2 size={20} />
                              </button>
                            </Dialog.Trigger>
                          </Dialog.Root>
                          <button
                            title="Excluir cliente"
                            className="pt-3 w-10 h-10"
                            onClick={() => handlerOnDelete(client._id!)}
                          >
                            <CgTrashEmpty size={23} />
                          </button>
                        </div>
                        <div className="w-full pl-4 py-2">
                          <label className="font-bold">Informações</label>
                          <p className="flex items-center">
                            <div className="mr-3">
                              <AiOutlineUser className="" />
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
                          <div className="mt-2">
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
                          </div>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </ScrollArea.Viewport>
            );
          })}
          <ScrollArea.Scrollbar
            className="fill-green-700"
            orientation="vertical"
          ></ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </div>
    </>
  );
};

export { ClientPage };
