function IdCard (props) {

    return (
        <div className={props.data.isStudent ? "isStudent id-card" : "isTeacher id-card"}> 
            <img className="picture" src={props.data.img} alt={props.data.firstName}/>
            <div className="data">
                <p>Last Name: {props.data.lastName}</p>
                <p>First Name: {props.data.firstName}</p>
                <p>Country: {props.data.country}</p>
            </div>
        </div>
    )
}

export default IdCard;