import axios from "axios";
import { Users } from "../types/randomUsers";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import {
  AiOutlineEnvironment,
  AiOutlineMan,
  AiOutlineWoman,
  AiOutlineUser,
} from "react-icons/ai";
import { GiCandles } from "react-icons/gi";

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
      <div className="w-full">
        <div className="border-y-zinc-400 pl-3 pt-4">
          {users?.map((user) => {
            const photo = user.picture.medium;
            return (
              <ul
                className="w-full items-center rounded-sm hover:bg-green-900"
                key={user.login.uuid}
              >
                <div className="flex ml-3 items-center">
                  <img
                    src={photo}
                    className="pr rounded-full h-1/2"
                    alt="profile-picture"
                  />
                  <li className="pl-3 my-2">
                    <div className="flex items-center">
                      <AiOutlineUser />
                      <p className="font-bold ml-3 flex items-center">
                        {user.name.first} {user.name.last}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          <div className="flex w-5">
                            <AiOutlineWoman />
                            <AiOutlineMan />
                          </div>
                          <p className="flex items-center ml-2">
                            {user.gender}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-13 flex items-center">
                      <div className="items-center">
                        <GiCandles />
                      </div>
                      <p className="ml-3">{user.dob.age}</p>
                    </div>
                    <div className="w-13 flex items-center">
                      <AiOutlineEnvironment />
                      <p className="ml-3">
                        {user.location.city}, {user.location.country}
                      </p>
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
export { HomePage };
