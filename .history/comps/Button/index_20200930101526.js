import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 384px;
    height: 46px;
    background: #4285F4;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.03em;
`;

const Buttons = ({text}) => {
    return <Button>
        {text}
        </Button>
}

Buttons.defaultProps = {
    title: "title"
}

export default Buttons;