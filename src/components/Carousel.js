import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Carousel({imageUrl, prevImage, nextImage}) {
    return (
        < div style={{display: "flex", alignItems: "center", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}} >
            <FaChevronLeft
                onClick={prevImage}
            />
            <img  style={{width:"80vw", height:"80vh"}} src={`${imageUrl}`} alt=""></img>
            <FaChevronRight
                onClick={nextImage}
            />
        </div>
    );
}