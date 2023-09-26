interface Props {
    onClick: () => void
}

export default function PlusButton({onClick}: Props) {
    return (
        <button 
            onClick={onClick}
        >
            +
        </button>
    )
}