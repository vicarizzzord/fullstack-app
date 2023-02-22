import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../../libs/axios";
import { Clients } from "../../types/clients";
import { BiSave } from "react-icons/bi";

const CreateClient = () => {
  const [fields, setFields] = useState<Clients>({});
  const [client, setClient] = useState<Clients>({});

  const handleFields = (e: ChangeEvent<any>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setClient(fields);
  };

  async function createClientHandler(newClient: Clients) {
    await api.post("/client", newClient);
  }

  const handleSubmit = () => {
    if (fields) setClient(fields);
    createClientHandler(client);
  };

  return (
    <>
      <h1 className="font-bold text-2xl">Novo cliente</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col mt-8">
        <label className="pb-3 font-bold">Dados</label>
        <input
          placeholder="Nome"
          name="name"
          value={fields?.name}
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
        />
        <input
          placeholder="Email"
          name="email"
          value={fields?.email}
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
        />
        <input
          placeholder="Telefone"
          value={fields?.phone}
          name="phone"
          type="number"
          onChange={handleFields}
          className="p-2 rounded-lg appearance-none bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
        />
        <input
          placeholder="CPF"
          value={fields?.cpf}
          name="cpf"
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
        />
        <div className="w-full flex flex-col mt-8">
          <label className="pb-3 font-bold">Endereço</label>
          <input
            placeholder="Rua"
            value={fields?.street}
            name="street"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
          />
          <input
            placeholder="Número"
            value={fields?.number}
            name="number"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
          />
          <input
            placeholder="Bairro"
            value={fields?.district}
            name="district"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 focus:ring-offset-zinc-700"
          />
        </div>
        <button className="flex items-center justify-center transition-colors bg-green-600 rounded-lg p-2 m-1 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-zinc-700 focus:ring-green-600">
          <BiSave size={18} className="mx-2" />
          Salvar
        </button>
      </form>
    </>
  );
};

export { CreateClient };
