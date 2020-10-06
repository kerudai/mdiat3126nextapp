import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Button = styled.div`
    // position: relative;
    width: 384px;
    height: 46px;
    background: #4285F4;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.03em;
`;

const Image = styled.div`
    position: absolute;
    left: 0px;
`;

const Google = () => {
    return <Container>
        <Button>
            Login with Google
            <Image><img src="/logo.png" /></Image>
        </Button>
    </Container>

}

Google.defaultProps = {
    title: "title"
}

export default Google;