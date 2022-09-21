
//Aqui é o local com as configurações para serem exportadas para o arquivo React que é o App.js
//Pode-se dizer que aqui é a oficina. E o App.js é a loja para ser exibido o trabalho feito aqui.
//Faz aqui e exporta pra lá.


import styled from 'styled-components';
import Background from '../../assets/background1.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
   
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #EEEEEE;

    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    
    width: 342px;
    height: 58px; 
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 60px;

    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;


    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`;
