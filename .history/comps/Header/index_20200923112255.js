import React from 'react';
import styled, {css} from 'styled-components';

const HeadTitle = styled.h1`
    font-size: 18px;
    color: ${props=>props.color ? props.color : "#FFF"};
    padding: 5px;
    ${props=>props.highlight === true && css`
    background-color: #F5A;
    margin: 10px;
    `}
`;

const HeadBox = styled.div`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({color, highlight}) => {
    return <HeadBox>
        <HeadTitle color={color}>Name: </HeadTitle>
        <HeadTitle highlight={highlight}>Ke-Ju</HeadTitle>
    </HeadBox>;
}

Header.defaultProps = {
    color: null,
    highlight: null
};

export default Header;