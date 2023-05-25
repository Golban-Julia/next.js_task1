import { FC, ReactNode} from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

type layoutProps = {
    children:ReactNode,
}

export const Layout:FC<layoutProps> = ({ children }) => <>
    <Header />
    {children}
    <Footer />
</>

