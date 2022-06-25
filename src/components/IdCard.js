function IdCard(props) {
  const {picture, firstName, lastName, gender, height} = props.data;
    return (
      <div className="id-card">
        <img
          className="picture"
          src={picture}
          alt={firstName}
        />
        <div className="data">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Birth: {props.birthDate.toString()} </p>
        </div>
      </div>
    );
  }
  
  export default IdCard;