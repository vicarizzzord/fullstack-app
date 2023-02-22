import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Header } from "../Header";
import { FaDog } from "react-icons/fa";


const DogPage = () => {
  const [randomDog, setRandomDog] = useState("");
  const [dogImg, setDogImg] = useState("");

  const url = "https://random.dog/";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setRandomDog(response.data,
        );
      })
      .finally(() => {
        if (randomDog) ReactHtmlParser(randomDog);
      });
  }, []);

  const getDog = () => {
    axios
      .get(url)
      .then((response) => {
        setRandomDog(response.data);
      })
      .finally(() => {
        ReactHtmlParser(randomDog);
      });
  };

  useEffect(() => {
    const imgDiv = document.getElementById("dog-img")?.getAttribute("src");
    if (imgDiv) setDogImg(imgDiv);
  }, [randomDog]);

  return (
    <>
      <Header page="Random Dogs" />
      <div className="w-full h-screen bg-zinc-900">
        <div className="flex items-center justify-center mt-2">
          <span className="font-semibold pr-5 text-2xl">Cachorro do dia</span>
          <button
            className="group w-20 h-7 flex items-center justify-center rounded-2xl bg-green-600 border-zinc-600 hover:bg-zinc-600 transition-colors"
            onClick={getDog}
          >
            <FaDog size={22} className="fill-zinc-800 group-hover:fill-white" />
          </button>
        </div>
        <div className="w-full m-3 flex justify-center">
          {
            <img
              src={`${url}/${dogImg}`}
              className="object-contain border-2 border-zinc-600 rounded-lg"
              width="400"
              height="160"
            />
          }
        </div>
        <div hidden>{ReactHtmlParser(randomDog)}</div>
      </div>
    </>
  );
};

export { DogPage };
