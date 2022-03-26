import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import AddEmployee from './AddEmployee';
import AddTask from './AddTask';
import EmployeeList from './EmployeeList';
import Profile from './Profile';
import TaskSubmission from './TaskSubmission';
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    height: 100%;
    background-color: #FEF5ED;
`;

const SubContainer = styled.div`
    height: 100vh;
    width: 20rem;
    background-color: #B4CFB0;
    border-right: 3px solid grey;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    @media (max-width:950px) {
        width: 5rem;
    }
`;

const DashList = styled.div`
    height: 40px;
    width: 80%;
    margin-left: 8%;
    margin-right: 10%;
    margin-top: 15px;
    cursor: pointer;
    border-bottom: 2px solid grey;
    border-radius: 50px;
    display: flex;
    :hover{
        background-color: #d2e0cf;
    }
`;

const ListContainer = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const OtherContainer = styled.div`
    width: 85%;
`;

const UserDetails = styled.div`
    width: 80%;
    margin-left: 10px;
    margin-right: 10%;
    margin-top: 200px;
`;

const THeader = styled.p`
    font-size: 35px;
    text-align: center;
    font-weight: 600;
    margin: 0;
    margin-left: 20px;
    @media (max-width:950px) {
        font-size: 0;
    }
`;

const DashHeading = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-left: 10%;
    margin-top: 5px;
    @media (max-width:950px) {
        font-size: 0;
    }
`;

const UserName = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    cursor: pointer;
    padding-left: 20px;
    padding-bottom: 10px;
    display: flex;
    border-radius: 50px;
    @media (max-width:950px) {
        font-size: 0;
    }
`;

const DashIcon1 = styled(AiFillHome)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon2 = styled(MdLeaderboard)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon3 = styled(MdAddToPhotos)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon4 = styled(ImUserPlus)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon5 = styled(FaUsers)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon6 = styled(BiTask)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;
const DashIcon7 = styled(FaUserCog)`
    padding-top: 10px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
`;

const TitleIcon = styled(FaTasks)`
    padding-top: 10px;
    margin-left: 20px;
    height: 30px;
    width: 30px;
`;

const UserIcon = styled(FaUserAlt)`
    padding-left: 20px;
    padding-top: 5px;
    height: 20px;
    width: 20px;
`;

const LogoutIcon = styled(FiLogOut)`
    padding-left: 20px;
    padding-top: 5px;
    height: 20px;
    width: 20px;
`;

const TitleDiv = styled.div`
    display: flex;
    margin-top: 20px;
    :hover{}
`;
const TitleDiv2 = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left: 4%;
`;

function Dashboard() {
    let navigate = useNavigate();
    return (
        <Container>
            <SubContainer>
                <TitleDiv>
                    <TitleIcon />
                    <THeader>TaskHandler</THeader>
                </TitleDiv>
                <ListContainer>
                    <DashList
                        onClick={() => { navigate('', { replace: false }) }}>
                        <DashIcon1 />
                        <DashHeading>Home</DashHeading>
                    </DashList>
                    <DashList
                        onClick={() => {
                            navigate('leaderboard', { replace: false })
                        }}>
                            <DashIcon2 />
                        <DashHeading>LeaderBoard</DashHeading>
                    </DashList>
                    <DashList
                        onClick={() => {
                            navigate('addtask', { replace: false })
                        }}>
                            <DashIcon3 />
                        <DashHeading>AddTask</DashHeading>
                    </DashList>
                    <DashList onClick={() => {
                        navigate('addemployee', { replace: false })
                    }}>
                        <DashIcon4 />
                        <DashHeading>AddEmployee</DashHeading>
                    </DashList>
                    <DashList onClick={() => {
                        navigate('employeelist', { replace: false })
                    }}>
                        <DashIcon5 />
                        <DashHeading>EmployeeList</DashHeading>
                    </DashList>
                    <DashList onClick={() => {
                        navigate('tasksubmission', { replace: false })
                    }}>
                        <DashIcon6 />
                        <DashHeading>TaskSubmission</DashHeading>
                    </DashList>
                    <DashList onClick={() => {
                        navigate('profile', { replace: false })
                    }}>
                        <DashIcon7 />
                        <DashHeading>Profile</DashHeading>
                    </DashList>
                </ListContainer>
                <UserDetails>
                    <TitleDiv2>
                        <UserIcon />
                        <UserName>
                            UserName
                        </UserName>
                    </TitleDiv2>
                    <TitleDiv2>
                        <LogoutIcon />
                        <UserName>
                            Logout
                        </UserName>
                    </TitleDiv2>
                </UserDetails>
            </SubContainer>
            <OtherContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/leaderboard" element={<LeaderBoard />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route path="/addtask" element={<AddTask />} />
                    <Route path="/employeelist" element={<EmployeeList />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tasksubmission" element={<TaskSubmission />} />
                </Routes>
            </OtherContainer>
        </Container>
    );
}
export default Dashboard;