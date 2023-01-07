import React from 'react'
import { Route, Routes as RoutesWrapper, BrowserRouter } from 'react-router-dom'

import { CatsPage } from '../pages/httpCats'
import { DogPage } from '../pages/randomDog'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { ClientPage } from '../pages/clientsPage'

const Routes = () => (
    <>
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cats" element={<CatsPage />} />
                <Route path="/dogs" element={<DogPage/>} />
                {<Route path="/clients" element={<ClientPage/>} />}
            </RoutesWrapper>
        </BrowserRouter>
    </>
)

export { Routes }