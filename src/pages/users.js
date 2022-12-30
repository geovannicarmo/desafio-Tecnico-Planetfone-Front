import styled from 'styled-components'
import { useState, useEffect } from "react"
import { usersDataAPI } from '../services/UsersApi.js'
import UserName from '../components/userName.js'
import HeaderComponet from '../components/HeaderComponet.js'

export default function Users(){
    
    const [arrayUser, setArrayUser] = useState(null)
        
        async function fillArrayUser(){
            setArrayUser(await usersDataAPI())
        }
    
        useEffect(() => {
            fillArrayUser()
        },[])

    return(
        <Container>
            <HeaderComponet/>
        <UserStyled>
            { 
                arrayUser
                ?
                arrayUser.map((a, index) => <UserName dataUser={a} key={index}/>)
                :
                <></>
            }
        </UserStyled>
            </Container>
    )
}

const UserStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`