import "../App.css"
import HeartLogo from "../images/heart.svg"


const Heart = ({ message }) => {
    return <>
    
        <div className="heart">
            <img className="heart-img" src={HeartLogo} alt="heart" />
            <p className="heart-message">{message}</p>
        </div>;

    </>
    
}

export default Heart;