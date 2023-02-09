import { ChangeEvent, useState } from "react";
import { Clients } from "../types/clients";

const CreateClient = () => {
  const [fields, setFields] = useState<Clients>();

  const handleFields = (e: ChangeEvent<any>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <input
          placeholder="Nome"
          name="name"
          value={fields?.name}
          type="text"
          onChange={handleFields}
        />
        <input
          placeholder="Email"
          name="email"
          value={fields?.email}
          type="text"
          onChange={handleFields}
        />
        <input
          placeholder="Telefone"
          value={fields?.phone}
          name="phone"
          type="text"
          onChange={handleFields}
        />
        <div className="address-container">
          <input
            placeholder="Rua"
            value={fields?.street}
            name="street"
            type="text"
            onChange={handleFields}
          />
          <input
            placeholder="Número"
            value={fields?.number}
            name="number"
            type="text"
            onChange={handleFields}
          />
          <input
            placeholder="Bairro"
            value={fields?.district}
            name="district"
            type="text"
            onChange={handleFields}
          />
          <input
            placeholder="CPF"
            value={fields?.cpf}
            name="cpf"
            type="text"
            onChange={handleFields}
          />
        </div>
        <button onClick={handleCreateSubmit}>Salvar</button>
        <button onClick={handleUpdateSubmit}>Atualizar</button>
      </div>
    </>
  );
};

export { CreateClient };
