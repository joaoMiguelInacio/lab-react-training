import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Carousel({imageUrl, prevImage, nextImage}) {
    return (
        <>
            <FaChevronLeft
                onClick={prevImage}
            />
            <img  style={{width:"80vw", height:"80vh"}} src={`${imageUrl}`}></img>
            <FaChevronRight
                onClick={nextImage}
            />
        </>
    );
}