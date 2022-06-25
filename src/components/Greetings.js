function Greetings(props) {
    const {lang, children} = props;
    return (
        <div>
            <p>{
                lang === "de" ? 'Hallo' 
                : lang === "fr" ?'Bonjour'
                    : lang === "pt" ?'Olá'
                        : lang === "es" ?'Hola'
                            :'Hello'} {children}!</p>
        </div>
    )
}

export default Greetings;