import { FormEvent, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { catsNumbers } from "../../types/randomCats"


const CatsPage = () => {
    const [statusCode, setStatusCode] = useState("")
    const [imageSource, setImageSource] = useState("")
    const url = `https://http.cat/${statusCode}`
    const local = "src/assets/gargantua.jpeg"

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (catsNumbers.includes(statusCode)) {
            setImageSource(url)
        } else {
            setImageSource(local)
        }

    }
    console.log(imageSource)

    return (
        <>
            <h1>Cats</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" required pattern="[0-9]+" onChange={(e) => setStatusCode(e.target.value)} className="status-input" />
                <button type="submit" className="btn-cat" >Miau</button>
            </form>
            {statusCode && <img src={imageSource} alt="" />}

            <a href="/">Voltar ao menu principal</a>
        </>
    )
}

export { CatsPage }