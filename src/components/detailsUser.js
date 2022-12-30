import styled from 'styled-components'

export default function DetailsUser({dataUser}){
    return(
        <Container>
            <Text>
                Id: {dataUser.id}
            </Text>
            <Text>
                Nome: {dataUser.name}
            </Text>
            <Text>
                Email: {dataUser.email}
            </Text>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    padding: 4px;
`
const Text = styled.div`
    height: 20px;
    margin: 4px;
    padding: 4px;
    font-size: 23px;
    @media (max-width: 680px) {
        margin: 2px;
        padding: 2px;
        font-size: 15px;
    }
`;