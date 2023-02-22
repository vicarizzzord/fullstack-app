import { FormEvent, useState } from "react";
import { GiHollowCat } from "react-icons/gi";
import { catsNumbers } from "../../types/randomCats";
import { Header } from "../Header";

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
      <div className="w-screen h-screen justify-items-center bg-zinc-900">
        <form className="flex justify-center ml-8  mt-2 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            pattern="[0-9]+"
            onChange={(e) => setStatusCode(e.target.value)}
            className="text-white text-center h-7 rounded-2xl placeholder:text-sm bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-center"
            placeholder="Busque um código HTTP"
          />
          <button
            type="submit"
            className="group w-20 h-7 ml-1 flex items-center justify-center bg-green-600 border-none rounded-2xl hover:bg-zinc-600 transition-colors"
          >
            <GiHollowCat size={26} className="fill-zinc-800 group-hover:fill-white" />
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <div className="">
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
