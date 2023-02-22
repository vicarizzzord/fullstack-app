export interface HeaderProps {
  page: string;
}

export function Header(header: HeaderProps) {
  const url = window.location.href;

  return (
    <div className="rounded-b-lg w-52 h-full bg-zinc-900">
      <h2 className="pl-2 py-3 text-2xl font-bold">{header.page}</h2>
      <nav className="">
        <ul className="">
          <li
            className={`rounded-t-lg broder-none flex items-center w-full h-10 box-border ${
              url === "http://localhost:5173/"
                ? "bg-green-600 font-semibold"
                : "bg-zinc-700"
            } transition-colors border-green-600 hover:bg-green-600 hover:border-2 hover: transition-all`}
          >
            <a
              className="flex items-center pl-2 w-full h-full font-semibold"
              href="/"
            >
              Usuários
            </a>
          </li>
          <li
            className={`flex items-center w-full h-10 box-border ${
              url === "http://localhost:5173/clients"
                ? "bg-green-600 font-semibold "
                : "bg-zinc-700"
            } transition-colors border-green-600 hover:bg-green-600 hover:border-2  transition-all`}
          >
            <a className="flex items-center pl-2 w-full h-full font-semibold" href="/clients">
              Clientes
            </a>
          </li>
          <li
            className={`flex items-center w-full h-10 box-border ${
              url === "http://localhost:5173/cats"
                ? "bg-green-600 font-semibold"
                : "bg-zinc-700"
            } transition-colors border-green-600 hover:bg-green-600 hover:border-2 transition-all`}
          >
            <a
              className="flex items-center pl-2 w-full h-full active:bg-green-600 font-semibold"
              href="/cats"
            >
              Http Cats
            </a>
          </li>
          <li
            className={`rounded-b-lg flex items-center w-full h-10 box-border ${
              url === "http://localhost:5173/dogs"
                ? "bg-green-600 font-semibold"
                : "bg-zinc-700"
            } transition-colors border-green-600 hover:bg-green-600 hover:border-2 hover: transition-all`}
          >
            <a
              className="flex items-center pl-2 w-full h-full item font-semibold"
              href="/dogs"
            >
              Random Dogs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
