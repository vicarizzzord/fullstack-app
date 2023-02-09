import axios from "axios";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Header } from "./Header";

const DogPage = () => {
  const [randomDog, setRandomDog] = useState("");
  const [dogImg, setDogImg] = useState("");
  const [render, setRender] = useState(true);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    axios
      .get("https://random.dog/")
      .then((response) => {
        setRandomDog(response.data);
      });
      
  }, []);

  useEffect(() => {
    let imgSource = document.getElementById("dog-img")?.getAttribute("src");

    if (imgSource) {
      setDogImg(imgSource);
      setRender(false);
      if(imgSource.endsWith("mp4")){
        imgSource = document.getElementById("dog-img")?.getAttribute("source")
        setIsVideo(true)
      }
    }
    console.log(isVideo)
  }, [randomDog]);

  return (
    <>
    <Header page="Random Dogs"/>
    <div className="container">
      <div className="randomDog-container">
        <div className="img-container">
          {render && ReactHtmlParser(randomDog)}
          {!isVideo ? (
            <img src={`https://random.dog/${dogImg}`} alt="" />
          ) : (
            <video loop muted>
              <source src={`https://random.dog/${dogImg}`} type="video/mp4">
              </source>
            </video>
          )}

          <div className="button-container">
            <button className="update-btn">AU AU</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export { DogPage };
