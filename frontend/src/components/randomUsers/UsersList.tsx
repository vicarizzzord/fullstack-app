import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { api } from "../../libs/axios";
import { Users } from "../../types/randomUsers";
import {
  AiOutlineEnvironment,
  AiOutlineMan,
  AiOutlineWoman,
  AiOutlineUser,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { GiCandles } from "react-icons/gi";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const UsersList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    api.get("https://randomuser.me/api/?results=70").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  const usersCount = 10;
  const visitedPages = usersCount * pageNumber;

  const userLists = users
    ?.slice(visitedPages, visitedPages + usersCount)
    .map((user) => {
      const photo = user.picture.medium;
      return (
        <ul
          className="w-full items-center rounded-full hover:bg-green-600 "
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
                    <p className="flex items-center font-semibold ml-2">
                      {user.gender}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-13 flex items-center font-semibold">
                <div className="items-center">
                  <GiCandles />
                </div>
                <p className="ml-3">{user.dob.age}</p>
              </div>
              <div className="w-13 flex items-center font-semibold">
                <AiOutlineEnvironment />
                <p className="ml-3">
                  {user.location.city}, {user.location.country}
                </p>
              </div>
            </li>
          </div>
        </ul>
      );
    });

  const pages = Math.ceil(users.length / usersCount);
  const previousPages = pageNumber !== pages - 1;
  const nextPages = pageNumber !== 0;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-full bg-zinc-900">
      <div className="pl-3 pt-4">
        <ScrollArea.Root>
          <ScrollArea.Viewport>
            <div className="h-screen w-full">
              {userLists}
              <ReactPaginate
                breakLabel={
                  <span className="mx-1 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-700">
                    ...
                  </span>
                }
                pageRangeDisplayed={3}
                previousLabel={
                  nextPages ? (
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-700 hover:bg-green-600">
                      <AiOutlineArrowLeft />
                    </span>
                  ) : null
                }
                nextLabel={
                  previousPages ? (
                    <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-700 hover:bg-green-600">
                      <AiOutlineArrowRight />
                    </span>
                  ) : null
                }
                pageCount={pages}
                onPageChange={changePage}
                containerClassName="flex justify-center mt-4"
                pageClassName="block border border-solid border-zinc-700 mx-1 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-green-900 hover:font-bold hover:border-green-600"
                activeClassName="border-none bg-green-600 font-bold "
              />
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical"></ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </div>
    </div>
  );
};

export { UsersList };
