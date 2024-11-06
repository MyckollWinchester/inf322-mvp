interface ButtonBigProps {
    text: string;
}

export function ButtonBig({text}: ButtonBigProps) {
    return (
        <button type="button" className="button-big" onClick={() => alert('Crear post no implementado')}> 
            {text}
        </button>
    )
}