import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Google = () => {
    return <Container>
        <h1>Google!</h1>
    </Container>

}

Google.defaultProps = {
    title: "title"
}

export default Google;