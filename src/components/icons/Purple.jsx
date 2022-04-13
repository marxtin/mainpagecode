import { IconContext } from "react-icons";

export default function PurpleIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#7600dc",size: "2rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}