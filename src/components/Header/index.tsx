import { Switch } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
    const theme = useContext(ThemeContext)
    return (
        <div className={`p-4 flex justify-end ${ theme.theme === "light" ? "bg-white" : "bg-black"}`}>
            <Switch onChange={theme.toogle} color="secondary"/>
        </div>
    )
}