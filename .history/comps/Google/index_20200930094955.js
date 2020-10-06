import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Button = styled.div`
    position: relative;
    width: 384px;
    height: 46px;
    background: #4285F4;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.03em;
`;

const Image_Box = styled.div`
    position: absolute;
    width: 44.54px;
    height: 41.59px;
    background: #FFFFFF;
    left: 5px;
`;

const Image = styled.div`
    position: absolute;
    left: 0px;
`;

const Google = () => {
    return <Container>
        <Button>
            Login with Google
            <Image_Box>
                <Image><img src="/logo.png" /></Image>
            </Image_Box>
        </Button>
    </Container>

}

Google.defaultProps = {
    title: "title"
}

export default Google;