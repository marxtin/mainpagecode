import { IconContext } from "react-icons";

export default function OrangeIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#f0844f",size: "2.5rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}