function IdCardProps(props) {
  
  const {isStudent, img, firstName, lastName, country} = props.data;
  return (
    <div
      className={
        isStudent ? 'isStudent id-card' : 'isTeacher id-card'
      }
    >
      <img
        className="picture"
        src={img}
        alt={firstName}
      />
      <div className="data">
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Country: {country}</p>
      </div>
    </div>
  );
}

export default IdCardProps;
