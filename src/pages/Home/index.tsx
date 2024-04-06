import { useContext } from "react";
import Header from "../../components/Header";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Footer } from "../../components/Footer";


export function Home() {
    const theme = useContext(ThemeContext)
    return (
        <>
            <Header/>
            <div className={`h-[calc(100vh-118px)] flex items-center justify-center ${theme.theme === "light" ? "bg-white" : "bg-black"}`}>
                <p className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${theme.theme === "light" ? "text-black" : "text-white" }`}> { theme.theme === "light" ? "Claridél" : "Escuridél"} </p>
            </div>
            <Footer/>
        </>
    )
}