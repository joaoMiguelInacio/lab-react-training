function IdCard(props) {
    return (
      <div className="id-card">
        <img
          className="picture"
          src={props.data.picture}
          alt={props.data.firstName}
        />
        <div className="data">
          <p>First Name: {props.data.firstName}</p>
          <p>Last Name: {props.data.lastName}</p>
          <p>Gender: {props.data.gender}</p>
          <p>Height: {props.data.height}</p>
          <p>Birth: {props.birthDate.toString()} </p>
        </div>
      </div>
    );
  }
  
  export default IdCard;