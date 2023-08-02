import "../App.css"
import Header from "../components/Header"
import Heart from "../components/Heart"


const Home = () => {
    
    const message = "hello cud"


    return <>
        <Header />
        <Heart message={message}/>
    
    </>
}

export default Home;
