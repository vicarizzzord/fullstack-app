import { useFetch } from "../../hooks/useFetch"
import { Users } from "../../types/randomUsers"


const HomePage = () => {
    const { data: users } = useFetch<Users[]>('https://randomuser.me/api/?results=20')

    return (
        <>
            <header>
                <h3>Home Page</h3>
            </header>
            <div className="menu">
                <h3>Escolha o serviço: </h3>
                <nav>
                    <ul>
                        <div className="service-options">
                            <li>
                                <a href="/cats">Http Cats</a>
                            </li>
                            <li>
                                <a href="/dogs">Random Dogs</a>
                            </li>
                            <li>
                                <a href="/clients">Clients</a>
                            </li>
                        </div>

                    </ul>

                </nav>
            </div>
            <div className="users-container">
                <h1>Users</h1>
            <ul>
                {users?.map(user => {
                    const photo = user.picture.medium
                    return (
                        <>
                        <img src={photo} alt="profile-picture" />
                        <li>
                            <p>{user.gender}</p>
                        
                            <p>{user.name.first}</p>
                        
                            <p>{user.name.last}</p>

                        </li>
                        </>
                    )
                })}
            </ul>
            </div>
        </>
    )
}
export { HomePage }