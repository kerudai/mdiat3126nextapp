import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#DEFECD"};
    background-image: url("/${props=>props.bgimage ? props.bgimage : ""}");
    min-width: 10px;
    min-height: 10px;
`;

const Content = ({children, bgcolor, bgimage}) => {
    return <Container bgcolor={bgcolor} bgimage={bgimage}>
        {children}
    </Container>
}

Content.defaultProps = {
    bgcolor: "#DEFECD",
    bgimage: ""
}

export default Content;