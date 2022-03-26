import React from 'react'
import styled from 'styled-components';
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    padding: 2%;
    padding-left: 5%;
    padding-top: 20px;
`;

const HeaderContaniner = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    width: 90%;
    height: 3rem;
    background-color: #B4CFB0;
    border-radius: 50px;
    @media (max-width:950px) {
        height: 3rem;
    }
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
    top: 5px;
    left: -50px;
    background-color: #B4CFB0;
    cursor: pointer;
    @media (max-width:950px) {
        height: 0   rem;
        width: 0rem;
    }
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
    position: relative;
    @media (max-width:950px) {
        height: 3rem;
        width: 3rem;
        right: 10px;
        top: 18px;
    }
`;

function Home(){
    let navigate = useNavigate();
    return(
        <Container>
            <FlexContainer>
                <HeaderContaniner>
                    <P>Latest Added Task</P>
                </HeaderContaniner>
                <AddContainer onClick={()=>{
                            navigate('addtask',{replace:true})}}>
                    <AddIcon />
                </AddContainer>
            </FlexContainer>
            <FlexContainer>
                <HeaderContaniner>
                    <P>Latest Added Employee</P>
                </HeaderContaniner>
                <AddContainer onClick={()=>{
                            navigate('addemployee',{replace:true})}}>
                    <AddIcon />
                </AddContainer>
            </FlexContainer>
        </Container>
    );
}
export default Home;