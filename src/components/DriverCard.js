import Rating from './Rating';

function DriverCard(props) {
    const {name, img, rating, car} = props;
    return (
      <div className="id-card">
        <img
          className="picture"
          src={img}
          alt={name}
        />
        <div className="data">
          <p>{name}</p>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    );
  }
  
  export default DriverCard;
