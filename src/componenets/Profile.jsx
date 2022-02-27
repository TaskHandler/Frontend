import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";

const Container = styled.div`
    padding: 5%;
    padding-top: 0;
`;

const DetailContainer = styled.div`
    justify-content: space-around;
    display: flex;
    border: 5px solid #B4CFB0;
    height: 15rem;
    padding-left: 3%;
    padding-right: 3%;
`;

const SubContainer = styled.div`
    margin-top: 1rem;
    margin-right: 5%;
`;

const SubContainer2 = styled.div`
    margin-top: 1rem;
    margin-right: 1%;
`;

const ProfileContainer = styled.div`
    height: 15%;
    width: 15%;
    background-color: #B4CFB0;
    margin-left: 40%;
    border-radius: 100px;
    position: relative;
    top: 3rem;
`;

const UserIcon = styled(FaUserCircle)`
    height: 100%;
    width: 100%;
    color: #463c3c;
`;

const P = styled.p`
    font-size: 20px;
    text-align: left;
`;

function Profile(){
    return(
        <Container>
            <ProfileContainer>
                <UserIcon />
            </ProfileContainer>
            <DetailContainer>
                <SubContainer>
                    <P>UserName :- Aditya Verma</P>    
                    <P>Number of Task Assigned :- 100</P>         
                </SubContainer>
                <SubContainer2>
                    <P>Company :- TaskHandler</P>             
                    <P>Number of employee Added :- 100  </P>
                </SubContainer2>
            </DetailContainer>
        </Container>    
    );
}
export default Profile;