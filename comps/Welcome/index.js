import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Welcome = () => {
    return <Container>
        <h1>Welcome Back!</h1>
    </Container>

}

Welcome.defaultProps = {
    title: "title"
}

export default Welcome;