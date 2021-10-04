import React from "react";
import styled from "styled-components";
//import { useSelector } from "react-redux";

const MainBlock = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    item-align: center;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 2rem;
    }
    p{
        margin-top: 15px;
    }
`;

function Main({name}){
    return (
        <MainBlock>
            <h2>WELCOME HOME!</h2>
            <p>현재 <b>{name}모드</b> 사용중입니다.</p>
        </MainBlock>
    );
}

export default Main;