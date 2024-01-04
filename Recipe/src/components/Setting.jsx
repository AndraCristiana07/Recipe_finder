import Footer from "./Footer"
import TopBar from "./TopBar"

export default function Settings() {
    return (
        <><div>
            <TopBar></TopBar>
        </div>
         <div
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