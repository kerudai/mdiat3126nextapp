import React from 'react';
import styled from 'styled-components';

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
`;
const Menu = () => {
    return <div>
        <DropDownMenu>
            <DropDownBox>
                <div><img src="/user.png" /></div>
                <div>johndoe@bcit.ca</div>
                <div><img src="/expand.png" /></div>
            </DropDownBox>
        </DropDownMenu>
    </div>
}

Menu.defaultProps = {

}

export default Menu;