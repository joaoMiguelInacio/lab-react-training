/* Impossible to read these many ternaries. Use if statements or switch. However, in this case,
there is an even better option:

let string = '★';
  string = string.repeat(numberOfStars).padEnd(5, '☆');
  
*/

function Rating(props) {
    const {children} = props;
    return (
            <img src= {children >= 4.5 ? 
            "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/5-stars_q9kgnk.png"
                : children >= 3.5 ?
                    "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/4-stars_aeafgg.png"
                    : children >= 2.5 ?
                    "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/3-stars_bhq1hn.png"
                        : children >= 1.5 ?
                        "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/2-stars_ab8k90.png"
                            : children >= 0.5 ?
                            "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/1-stars_r1odtf.png"
                                : "https://res.cloudinary.com/dvru7nv6q/image/upload/v1655476120/Random/0-stars_vuo8je.png"}
                                
            alt = {children >= 4.5 ? 
            "/public/5-stars.png"
                : children >= 3.5 ?
                "/public/4-stars.png"
                    : children >= 2.5 ?
                    "/public/3-stars.png"
                        : children >= 1.5 ?
                        "/public/2-stars.png"
                            : children >= 0.5 ?
                            "/public/1-stars.png"
                                : "/public/0-stars.png"} />
                    
    )
}

export default Rating;