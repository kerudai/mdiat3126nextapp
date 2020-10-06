import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 384px;
    height: 46px;
    background: ${bgcolor};
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.03em;
`;

const Buttons = ({text, bgcolor}) => {
    return <Button bgcolor={bgcolor}>
        {text}
        </Button>
}

Buttons.defaultProps = {
    text: "text",
    bgcolor: "#4285F4"
}

export default Buttons;