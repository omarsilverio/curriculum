import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";

export default function AppLayout({ children }) {
    return (
        <>
            <NavBar/>
            
            { children }
            
            <Footer/>
        </>
    );
}