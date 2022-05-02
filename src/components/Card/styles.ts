import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    height: 300px;
    border-radius: 8px;
    padding: 5px;
    background: #fff;
    gap: 10px;
    width: 45%;


    img {
    object-fit: cover;
    height: 290px;
    border-radius: 8px;
    max-width: 180px;
}

    div {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
`;

export const Titulo = styled.h4``;
export const Resumo = styled.p``;
export const ButtonNoticia = styled.a`
    background-color: #49065e;
    padding: 10px 20px;

`


