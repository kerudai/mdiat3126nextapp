import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
`;
const DropDownMenu = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 20px;
    display: inline-flex;
    justify-content: center:
    align-items: center;
`;

const DropDownBox = styled.div`
width: 100%;
padding: 10px;
display: flex;
div {
    margin: 0 10px;
}
`;

const Expand = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
    display: ${props=>props.expanded ? "inline-flex" : "none"};
    flex-direction: column;
    margin-top: 10px;
    div {
        padding: 10px 15px;
        margin: 5px 0;
    }
`;
const Menu = () => {
    const [expanded, setExpanded] = useState(true);

    return <Container>
        <DropDownMenu>
            <DropDownBox>
                <div><img src="/user.png" /></div>
                <div>johndoe@bcit.ca</div>
                <div><img src="/expand.png" /></div>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded = {expanded}>
            <div>Change BG Color</div>
            <div>Change BG Image</div>
            <div>Help</div>
        </Expand>
    </Container>
}

Menu.defaultProps = {

}

export default Menu;