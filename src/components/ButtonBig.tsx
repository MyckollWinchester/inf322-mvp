interface ButtonBigProps {
    text: string;
    onClick: () => void;
}

export function ButtonBig({ text, onClick }: ButtonBigProps) {
    return (
        <button type="button" className="button-big" onClick={onClick}>
            {text}
        </button>
    )
}