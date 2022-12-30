import styled from 'styled-components'


export default function HeaderComponet(){

    return (
        <Container>
            <h1>Desafio Planetfone</h1>
            <h1>Geovanni do Carmo</h1>

        </Container>
    )
}


const Container = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    margin-bottom: 200px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(90deg, rgba(229, 114, 117,0.97) 43%, rgba(229, 105, 117,0.97) 82%);
    h1{
        margin-left: 20px;
    }
    @media (max-width: 680px) {
        h1{
            font-size: 16px;
        }
    }
   `;