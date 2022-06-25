export default function NumbersTable({limit, displayNumbers}) {
    return (
      <>
        <table>
            <tr>
                <th>Numbers</th>
            </tr>
            {displayNumbers ()}
        </table>
      </>
    );
  }