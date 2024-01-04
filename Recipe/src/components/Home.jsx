import { Container, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import TopBar from './TopBar';
import TopSection from './TopSection';
import Improve from './Improve';
import Footer from './Footer';
import Quote from './Quote';
import logo from '../assets/logo.png';

export default function Home() {

    const navigate = useNavigate();
    return (
       <><div>
            <TopBar onSearch={() => {}}></TopBar>
            <TopSection></TopSection>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
            <div style={{
                justifyContent:"center", 
                alignContent:"center",
                margin:"20px",
                 }}>
                <img  src={logo} alt="logo" width="1400px" height={"400px" } />
            </div>
            </div>
            <Quote />
        </div><div
            style={{
                marginTop: "50px",
                // position: "fixed",
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