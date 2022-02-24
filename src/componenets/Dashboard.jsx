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

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #FEF5ED;
`;

const SubContainer = styled.div`
    height: 100vh;
    width: 30vh;
    background-color: #B4CFB0;
    border-right: 3px solid grey;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const DashList = styled.div`
    height: 40px;
    width: 80%;
    margin-left: 8%;
    margin-right: 10%;
    cursor: pointer;
    border-bottom: 2px solid grey;
    border-radius: 50px;
    :hover{
        background-color: #d2e0cf;
    }
`;

const ListContainer = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const UserDetails = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`;

const THeader = styled.p`
    font-size: 40px;
    text-align: center;
    font-weight: 600;
`;

const DashHeading = styled.p`
    font-size: 25px;
    font-weight: 500;
    margin-left: 15%;
`;

const UserName = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    cursor: pointer;
    padding-left: 40px;
    padding-bottom: 10px;
    display: flex;
    border-radius: 50px;
    :hover{
        background-color: #d2e0cf;
    }
`;

const UserIcon = styled(FaUserAlt)`
    padding-right: 20px;
    padding-top: 5px;
`;

const LogoutIcon = styled(FiLogOut)`
    padding-right: 20px;
    padding-top: 5px;
`;

function Dashboard() {
    let navigate = useNavigate();
    return (
        <Container>
            <SubContainer>
                <THeader>TaskHandler</THeader>
                <ListContainer>
                    <DashList 
                    onClick={()=>{navigate('',{replace:false})}}>
                        <DashHeading>Home</DashHeading>
                    </DashList>
                    <DashList 
                        onClick={()=>{
                            navigate('leaderboard',{replace:false})}}>
                        <DashHeading>LeaderBoard</DashHeading>
                    </DashList>
                    <DashList 
                        onClick={()=>{
                            navigate('addtask',{replace:false})}}>
                        <DashHeading>AddTask</DashHeading>
                    </DashList>
                    <DashList onClick={()=>{
                            navigate('addemployee',{replace:false})}}>
                        <DashHeading>AddEmployee</DashHeading>
                    </DashList>
                    <DashList onClick={()=>{
                            navigate('employeelist',{replace:false})}}>
                        <DashHeading>EmployeeList</DashHeading>
                    </DashList>
                    <DashList onClick={()=>{
                            navigate('tasksubmission',{replace:false})}}>
                        <DashHeading>TaskSubmission</DashHeading>
                    </DashList>
                    <DashList onClick={()=>{
                            navigate('profile',{replace:false})}}>
                        <DashHeading>Profile</DashHeading>
                    </DashList>
                </ListContainer>
                <UserDetails>
                    <UserName>
                        <UserIcon/>
                        UserName
                    </UserName>
                    <UserName>
                        <LogoutIcon />
                        Logout
                    </UserName>
                </UserDetails>
            </SubContainer>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/leaderboard" element={<LeaderBoard/>}/>
                <Route path="/addemployee" element={<AddEmployee />}/>
                <Route path="/addtask" element={<AddTask />}/>
                <Route path="/employeelist" element={<EmployeeList />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/tasksubmission" element={<TaskSubmission />}/>
            </Routes>
        </Container>
    );
}
export default Dashboard;