import React, { useState } from 'react';

interface Props {
    onClick: () => void,
}

function PlusButton({onClick}: Props) {
    return (
        <button 
            onClick={onClick}
        >
            +
        </button>
    )
}

export default PlusButton;