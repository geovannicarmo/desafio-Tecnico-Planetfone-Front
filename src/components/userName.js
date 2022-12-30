import styled from 'styled-components'
import { TbListDetails } from 'react-icons/tb';
import { useState } from 'react';
import DetailsUser from './detailsUser';

export default function UserName({dataUser}){

    const [showDatail, setShowDetail] = useState(false)
    return(
        <Container>

            <UserNameStyled>
                {dataUser.name}
                <ShowDetailsStyled onClick={() =>setShowDetail(!showDatail)}>
                    <TbListDetails/>
                    {
                        showDatail
                        ?
                        <h4>Ocultar</h4> 
                        :
                        <h4>Detalhes</h4> 

                    }
                </ShowDetailsStyled>
            </UserNameStyled>
                {
                    showDatail
                    ?
                    <DetailsUser dataUser={dataUser}/>
                    :
                    <></>
                }
        </Container>
    )
}

const UserNameStyled = styled.div`
    width: 500px;
    height: 40px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    @media (max-width: 680px) {
        width: 300px;
    }
    
`;

const ShowDetailsStyled = styled.div`
    display: flex;
    align-items: center;
    h4{
        font-size: 15px;
        margin: 5px;
    }
    @media (max-width: 680px) {
        h4{
        font-size: 10px;
        margin: 3px;
    }
    }
`

const Container = styled.div`
    font-size: 25px;
`