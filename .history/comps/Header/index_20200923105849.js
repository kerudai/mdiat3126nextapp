import React from 'react';
import styled from 'styled-components';

const HeadTitle = styled.h1`
    font-size: 18px;
    color: #FFF;
    padding: 5px;
`;

const HeadBox = styled.div`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({ }) => {
    return <HeadBox>
        <HeadTitle>Ke-Ju</HeadTitle>
    </HeadBox>;
}

export default Header;