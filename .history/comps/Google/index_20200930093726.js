import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Button = styled.div`
    width: 384px;
    height: 46px;
    background: #4285F4;
    color: #FFFFFF;
`;

const Google = () => {
    return <Container>
        <Button>
            Login with Google
        </Button>
    </Container>

}

Google.defaultProps = {
    title: "title"
}

export default Google;