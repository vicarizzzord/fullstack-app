import { useFetch } from "../../hooks/useFetch"



const DogPage = () => {
    const { data: dogs } = useFetch('https://random.dog/')

    return(
        <>
        {dogs?.map(dog => {
        console.log(dog)
            return (
                <img src="https://random.dog/" alt="" />
            )
        })}

    </>
    )
}  

export { DogPage }