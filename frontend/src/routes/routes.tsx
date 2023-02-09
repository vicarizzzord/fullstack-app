import React from 'react'
import { Route, Routes as RoutesWrapper, BrowserRouter } from 'react-router-dom'

import { CatsPage } from '../components/Cats'
import { DogPage } from '../components/Dog'
import { LoginPage } from '../pages/Login'
import { HomePage } from '../components/Users'
import { ClientPage } from '../components/ClientsList'

const Routes = () => (
    <>
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/cats" element={<CatsPage />} />
                <Route path="/dogs" element={<DogPage/>} />
                <Route path="/clients" element={<ClientPage/>} />
            </RoutesWrapper>
        </BrowserRouter>
    </>
)

export { Routes }