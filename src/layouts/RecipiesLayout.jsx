/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RecipiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipiesLayout;