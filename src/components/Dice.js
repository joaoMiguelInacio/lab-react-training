export default function Dice({url, rollDice}) {
    return (
        <button
            style={{
                backgroundImage: `url(${url})`, backgroundSize: `contain`, width: 400, height: 400
                }} 
            onClick={() => rollDice()}
            >            
        </button>
    );
}