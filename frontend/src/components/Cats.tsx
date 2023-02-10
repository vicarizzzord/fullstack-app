import { FormEvent, useState } from "react";
import { catsNumbers } from "../types/randomCats";
import { Header } from "./Header";

const CatsPage = () => {
  const [statusCode, setStatusCode] = useState("");
  const [imageSource, setImageSource] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const url = `https://http.cat/${statusCode}`;
    const local = "src/assets/gargantua.jpeg";
    if (catsNumbers.includes(statusCode)) {
      setImageSource(url);
    } else {
      setImageSource(local);
    }
  }

  return (
    <>
      <Header page="Cats" />
      <div className="w-full h-screen justify-items-center bg-zinc-900">
        <form className="ml-5 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            pattern="[0-9]+"
            onChange={(e) => setStatusCode(e.target.value)}
            className="text-black h-7 rounded-l-md"
            placeholder="Busque um código HTTP"
          />
          <button
            type="submit"
            className="w-20 h-7 bg-zinc-600 border-zinc-600 rounded-r-xl hover:bg-green-600 transition-colors"
          >
            Miau
          </button>
        </form>
        <div className="flex items-center">
          <div className="h-auto">
            {statusCode && (
              <img className="flex items-center" src={imageSource} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { CatsPage };
