import React from 'react'
import styled from 'styled-components';
import { MdAdd } from "react-icons/md";


const Container = styled.div`
    padding: 5%;
`;

const HeaderContaniner = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80rem;
    height: 3rem;
    background-color: #B4CFB0;
    border-radius: 50px;
`;

const FlexContainer = styled.div`
    display: flex;
    height: 25rem;
`;

const AddContainer = styled.div`
    height: 6rem;
    width: 6rem;
    border-radius: 100px;
    position: relative;
    top: -15px;
    left: -50px;
    background-color: #B4CFB0;
    cursor: pointer;
`;

const P = styled.p`
    margin: 0;
    margin-left: 2rem;
    padding-top: 0.5rem;
    font-size: 20px;
    font-weight:500;
`;

const AddIcon = styled(MdAdd)`
    height: 5rem;
    width: 5rem;
    padding-top: 0.4rem;
    padding-left: 0.6rem;
    color: #5b6d3f;
`;

function Home(){
    return(
        <Container>
            <FlexContainer>
                <HeaderContaniner>
                    <P>Latest Added Task</P>
                </HeaderContaniner>
                <AddContainer>
                    <AddIcon />
                </AddContainer>
            </FlexContainer>
            <FlexContainer>
                <HeaderContaniner>
                    <P>Latest Added Employee</P>
                </HeaderContaniner>
                <AddContainer>
                    <AddIcon />
                </AddContainer>
            </FlexContainer>
        </Container>
    );
}
export default Home;