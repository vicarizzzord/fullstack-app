import { Header } from "../Header";
import { UsersList } from "./UsersList";

const HomePage = () => {
  return (
    <>
      <Header page="Usuários" />
      <UsersList />
    </>
  );
};

export { HomePage };
