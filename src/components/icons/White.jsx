import { IconContext } from "react-icons";

export default function WhiteIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#ffffff",size: "2rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}