import { IconContext } from "react-icons";

export default function BlueIcon({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "#8088f8",size: "2rem" }}>
                {children}
            </IconContext.Provider>
        </>
    );
}