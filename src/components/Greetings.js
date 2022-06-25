/* What if you had 20 languages to loop through instead of 5?
Ternary operators are great, but should be used for cases in which there are 2, max 3, option.
Other than that, you should use if statements or switch cases. */

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