import { IconContext } from "react-icons";

export default function GreenIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#00dc76",size: "2rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}