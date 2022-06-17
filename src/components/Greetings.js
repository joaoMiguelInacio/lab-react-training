function Greetings(props) {
    return (
        <div>
            <p>{
                props.lang === "de" ? 'Hallo' 
                : props.lang === "fr" ?'Bonjour'
                    : props.lang === "pt" ?'Olá'
                        : props.lang === "es" ?'Hola'
                            :'Hello'} {props.children}!</p>
        </div>
    )
}

export default Greetings;