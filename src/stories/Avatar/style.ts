import styled from "styled-components";
import { AVATAR_INTERFACE } from ".";

export const StyleAvatar = styled.div<AVATAR_INTERFACE>`
    background: #00000085;
    font-family: Arial, Helvetica, sans-serif;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    ${props => props.tamanho === 'small' && {
        height: "40px"
    }}

    ${props => props.tamanho === 'bigger' && {
        height: "80px"
    }}

    .avatar{
        width: 60px;
        height: 60px;
        background: #546;

        ${props => props.tamanho === 'small' && {
            width: "40px",
            height: "40px"
        }}

        ${props => props.tamanho === 'bigger' && {
            width: "80px",
            height: "80px"
        }}
    }

    span{
        display: block;
        padding: 0px 15px;
        color: #FFFFFF;
        white-space: nowrap;
        line-height: 60px;
        text-overflow: ellipsis;
        overflow: hidden;
        box-sizing: border-box;
        
        ${props => props.showPoints === true ? {
            width: 'calc(100% - 120px)'
        } : {
            width: 'calc(100% - 60px)'
        }}

        ${props => props.tamanho === 'small' && {
            lineHeight: "40px",
            fontSize: "12px",
            padding: "0px 10px",
            width: props.showPoints === true ? `calc(100% - 80px)` : `calc(100% - 40px)`
        }}

        ${props => props.tamanho === 'bigger' && {
            lineHeight: "80px",
            fontSize: "18px",
            padding: "0px 20px",
            width: props.showPoints === true ? `calc(100% - 160px)` : `calc(100% - 80px)`
        }}
    }

    .pontuacao{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        font-weight: 800;
        background: #e67e22;

        ${props => props.tamanho === 'small' && {
            width: "40px",
            height: "40px"
        }}

        ${props => props.tamanho === 'bigger' && {
            width: "80px",
            height: "80px"
        }}
    }

    &:hover{
        background: #000000;
    }
`;