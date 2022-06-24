export default function FacebookCard({ user }) {
  const { isStudent, img, firstName, lastName, country } = user;
  return (
    <div style={{margin:20, border: "solid darkblue 5px", display: "flex", alignItems: "center", gap: 20}}>
      <img style={{ width: 200 }} src={img} alt={firstName} />
      <div>
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Country: {country}</p>
        <p>Type: {isStudent ? <span>Student</span> : <span>Teacher</span>}</p>
      </div>
    </div>
  );
}
