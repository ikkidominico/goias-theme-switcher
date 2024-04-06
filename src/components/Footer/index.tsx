import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export function Footer() {
    const theme = useContext(ThemeContext)
    return (
        <div className={`p-4 flex justify-center ${ theme.theme === "light" ? "bg-white" : "bg-black"}`}>
            <p className={`${theme.theme === "light" ? "text-black" : "text-white" }`}> Made with ❤ by @ikkidominico in Cork. </p>
        </div>
    )
}