export default function Number({number}) {
    return (
      <tr>
        <td style={number % 2 === 0 ? { backgroundColor: "red", textAlign : "center"} : {textAlign : "center"}}>{number}</td>
      </tr>
    );
  }