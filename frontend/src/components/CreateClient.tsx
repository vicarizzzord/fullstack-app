import { ChangeEvent, useState } from "react";
import { Clients } from "../types/clients";

const CreateClient = () => {
  const [fields, setFields] = useState<Clients>();

  const handleFields = (e: ChangeEvent<any>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="w-full flex flex-col mt-8">
      <label className="pb-3">Dados</label>
        <input
          placeholder="Nome"
          name="name"
          value={fields?.name}
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1"
        />
        <input
          placeholder="Email"
          name="email"
          value={fields?.email}
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1"
        />
        <input
          placeholder="Telefone"
          value={fields?.phone}
          name="phone"
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1"
        />
        <input
          placeholder="CPF"
          value={fields?.cpf}
          name="cpf"
          type="text"
          onChange={handleFields}
          className="p-2 rounded-lg bg-zinc-800 text-white m-1"
        />
        <div className="w-full flex flex-col mt-8">
          <label className="pb-3">Endereço</label>
          <input
            placeholder="Rua"
            value={fields?.street}
            name="street"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1"
          />
          <input
            placeholder="Número"
            value={fields?.number}
            name="number"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1"
          />
          <input
            placeholder="Bairro"
            value={fields?.district}
            name="district"
            type="text"
            onChange={handleFields}
            className="p-2 rounded-lg bg-zinc-800 text-white m-1"
          />
        </div>
        <button className="bg-green-600 rounded-lg p-2 m-1 hover:bg-green-500">Salvar</button>
      </form>
    </>
  );
};

export { CreateClient };
