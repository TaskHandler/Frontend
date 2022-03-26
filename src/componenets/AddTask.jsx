import styled from 'styled-components';

const Component = styled.div`
    position: relative;
    height: 80%;
`;

const MainComponent = styled.div`
    background-color: #B4CFB0;
    height: 50rem;
    margin: 5%;
    border-radius: 20px;
    border: 3px solid grey;
`;

const TitleComponent = styled.div`
    text-align: center;
    height: max-content;
    padding: 40px;
`;

const DataContainer = styled.div`
    padding: 30px;
    display: flex;
    padding-top: 50px;
`;

const DataDesc =styled.div`
    display: flex;
    position: relative;
    height: 50%;
`;

const DataEnter = styled.div`
    display: flex;
    margin-right: 60px;
`;

const RadioContainer = styled.div`
    margin-left: 10px;
    display: flex;
`;

const ButtonContainer = styled.div`
    width: 10rem;
    height: 3rem;
    background-color: #a4b99f;
    margin-left: 40%;
    margin-top: 50px;
    text-align: center;
    border-bottom: 2px solid grey;
    border-radius: 50px;
    cursor: pointer;
    :hover{
        background-color: #d2e0cf;
    }
`;

const P = styled.p`
    font-size:30px;
    font-weight: 500;
    margin: 0;
`;

const P2 = styled.p`
    margin: 0;
    font-size:20px;
    font-weight: 400;
`;

const P4 = styled.p`
    margin: 0;
    padding-top: 10px;
    font-size:20px;
    font-weight: 400;
`;
const P3 = styled.p`
    margin: 0;
    font-size:20px;
    font-weight: 400;
    margin-left: 30px;
`;

const NameEnter = styled.input`
    margin-left: 10px;
    border-radius: 10px;
    border: 0;
    position: relative;
    top: 2px;
    width: 15rem;
    background-color: #d2e0cf;
`;

const NameEnter3 = styled.input`
    margin-left: 10px;
    border-radius: 10px;
    border: 0;
    position: relative;
    top: 2px;
    width: 9rem;
    text-align: center;
    background-color: #d2e0cf;
`;

const NameEnter2 = styled.input`
    margin-left: 5%;
    margin-right: 5%;
    border-radius: 10px;
    border: 0;
    position: relative;
    height: 100%;
    width: 75%;
    top: 2px;
    text-align: center;
    background-color: #d2e0cf;
`;

const RadioInput = styled.input`
    position: relative;
    top: 8px;
    height: 10px;
    margin-right: 20px;
`;

function AddTask(){
    return(
        <Component>
            <MainComponent>
                <TitleComponent>
                    <P>Add Task</P>        
                </TitleComponent>
                <DataContainer>
                    <DataEnter>
                        <P2>Task Name : </P2>
                        <NameEnter />
                    </DataEnter>
                    <DataEnter>
                        <P2>Task Time : </P2>
                        <NameEnter3 type={"number"} />
                    </DataEnter>
                    <DataEnter>
                        <P2>Difficulty : </P2>
                        <RadioContainer>
                            <P2>Easy</P2>
                            <RadioInput  type="radio" name="difficulty" checked />
                            <P2>Medium</P2>
                            <RadioInput  type="radio" name="difficulty" />
                            <P2 >Difficult</P2>
                            <RadioInput  type="radio" name="difficulty"/>
                        </RadioContainer>       
                    </DataEnter>
                </DataContainer>
                <DataDesc>
                    <P3>Description : </P3>
                    <NameEnter2 type={'text'} /> 
                </DataDesc>
                <ButtonContainer>
                    <P4>Submit</P4>
                </ButtonContainer>
            </MainComponent>
        </Component>    
    );
}
export default AddTask;