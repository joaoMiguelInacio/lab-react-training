import { useState } from 'react';

function ClickablePicture(props) {
    const {img, imgClicked} = props;
    const [file, changeFile] = useState(img); 
    return (
        <button
            style={{
                backgroundImage: `url(${file})`, backgroundSize: `contain`, width: 400, height: 400
                }} 
            onClick={() => changeFile(file === img ? imgClicked : img)}
            >            
        </button>
    );
}

export default ClickablePicture;
