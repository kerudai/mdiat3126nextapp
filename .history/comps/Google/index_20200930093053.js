import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Google = () => {
    return <Container>
        <div className="button">
            Login with Google
        </div>
    </Container>

}

Google.defaultProps = {
    title: "title"
}

export default Google;