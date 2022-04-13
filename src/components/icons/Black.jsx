import { IconContext } from "react-icons";

export default function BlackIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#000000",size: "2rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}