import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { api } from "../../libs/axios";
import { Clients } from "../../types/clients";
import { CreateClient } from "./CreateClient";

const ClientsTools = () => {
  const [client, setClient] = useState<Clients>({});
  const [name, setName] = useState("");

  function getClient() {
    api.get(`/client/${name}`).then((response) => setClient(response.data));
  }

  return (
    <div className="m-1 ml-3">
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="w-40 h-11 flex items-center font-semibold bg-zinc-600 border-zinc-800 rounded-l-xl transition-colors hover:bg-green-600 hover:font-semibold hover:border-2 hover:border-green-600">
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
      </Dialog.Root>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="w-40 h-11 flex items-center font-semibold bg-zinc-600 border-zinc-800 rounded-r-xl transition-colors hover:bg-green-600 hover:border-2 hover:border-green-600">
            <div className="mx-3">
              <HiOutlineSearch />
            </div>
            Buscar Cliente
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0">
            <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 transitions-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                <X size={24} aria-label="Fechar" />
              </Dialog.Close>
              <h1>Busca</h1>
              <div className="flex justify-center items-center space-x-1 p-3">
                <input
                  placeholder="Busque pelo nome do cliente"
                  className="p-2 w-full rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <button onSubmit={getClient} className="flex justify-center items-center w-24 h-9 rounded-lg bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700">
                  <AiOutlineSearch size={22} />
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export { ClientsTools };
