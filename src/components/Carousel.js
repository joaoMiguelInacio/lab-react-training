export default function Carousel({imageUrl}) {
    return (
        <>
            <img  style={{width:"80vw", height:"80vh"}} src={`${imageUrl}`}></img>
        </>
    );
}