import { Container, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import TopBar from './TopBar';
import TopSection from './TopSection';
import Improve from './Improve';
import Footer from './Footer';

export default function Home() {

    const navigate = useNavigate();
    return (
       <><div>
            <TopBar></TopBar>
            <TopSection></TopSection>
            {/* <Improve></Improve> */}
        </div><div
            style={{
                position: "fixed",
                bottom: "0",
                width: "100%",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}>
                <Footer></Footer>
            </div></>
    )
}