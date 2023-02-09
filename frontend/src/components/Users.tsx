import axios from "axios";
import { Users } from "../types/randomUsers";
import { useEffect, useState } from "react";
import { Header } from "./Header";

const HomePage = () => {
  const [users, setUsers] = useState<Users[]>();

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <>
      <Header page="Usuários" />
      <div className="border-y-zinc-400 pl-3 pt-4">
        {users?.map((user) => {
          const photo = user.picture.medium;
          return (
            <ul className="items-center rounded-sm hover:bg-green-900" key={user.login.uuid}>
              <div className="flex items-center">
                <img src={photo} className="rounded-full h-1/2" alt="profile-picture" />
                <li className="pl-3 my-2">
                  <p>
                    {user.name.first} {user.name.last}
                  </p>
                  <p>{user.gender}</p>
                  <p>{user.dob.age}</p>
                  <p>
                    {user.location.city}, {user.location.country}
                  </p>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export { HomePage };
