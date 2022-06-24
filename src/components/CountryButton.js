export default function CountryButton({country, handleButtons}) {
    return (
        <button onClick={(e) => handleButtons(country)}> {country} </button>
    );
}
  