import { HeaderProps } from "../types/header";

export function Header(header: HeaderProps) {
  return (
    <div className="w-30 h-full justify-center items-center ">
      <h2 className="py-3 text-2xl font-bold">{header.page}</h2>
      <div className="">
        <nav className="">
          <ul className="">
            <div className="">
              <li className=" items-center w-40 h-7 box-border bg-zinc-800 hover:bg-green-600">
                <a href="/">Usuários</a>
              </li>
              <li className=" items-center w-40 h-7 box-border bg-zinc-800 hover:bg-green-600">
                <a href="/clients">Clientes</a>
              </li>
              <li className=" items-center w-40 h-7 box-border bg-zinc-800 hover:bg-green-600">
                <a href="/cats">Http Cats</a>
              </li>
              <li className=" items-center w-40 h-7 box-border bg-zinc-800 hover:bg-green-600">
                <a href="/dogs">Random Dogs</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
