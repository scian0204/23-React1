import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border : 1px solid black;
`;

const RoundedButton = styled(Button)`
    border-radius: 16px;
`;

function MainPage(props) {
    return (
        <div>
            <Wrapper>
                <Title>
                    안녕, 리액트!
                </Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <br/>
            <RoundedButton>rounded</RoundedButton>
            <RoundedButton dark>rounded</RoundedButton>
        </div>
    )
}

export default MainPage;