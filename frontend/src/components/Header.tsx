import { HeaderProps } from "../types/header";

export function Header(header: HeaderProps) {
  return (
    <div className="w-52 h-full bg-zinc-800">
      <h2 className="pl-2 py-3 text-2xl font-bold">{header.page}</h2>
      <nav className="">
        <ul className="">
            <li className="flex items-center w-full h-10 box-border bg-zinc-700 transition-colors hover:bg-green-600">
              <a className="flex items-center pl-2 w-full h-full" href="/">Usuários</a>
            </li>
            <li className="flex items-center w-full h-10 box-border bg-zinc-700 transition-colors hover:bg-green-600">
              <a className="flex items-center pl-2 w-full h-full" href="/clients">Clientes</a>
            </li>
            <li className="flex items-center w-full h-10 box-border bg-zinc-700 transition-colors hover:bg-green-600">
              <a className="flex items-center pl-2 w-full h-full" href="/cats">Http Cats</a>
            </li>
            <li className="flex items-center w-full h-10 box-border bg-zinc-700 transition-colors hover:bg-green-600">
              <a className="flex items-center pl-2 w-full h-full item" href="/dogs">Random Dogs</a>
            </li>
        </ul>
      </nav>
    </div>
  );
}
