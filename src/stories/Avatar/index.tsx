import React from "react"
import { StyleAvatar } from "./style"

// import { createAvatar } from "@dicebear/core";
// import { adventurerNeutral } from '@dicebear/collection';
// import SVG from 'react-inlinesvg';

export interface AVATAR_INTERFACE {
    nameUser: string,
    click?: VoidFunction,
    tamanho: 'small' | 'default' | 'bigger',
    children?: any,
    points?: number,
    showPoints?: boolean
}

export function Avatar({nameUser, click, tamanho, points, showPoints} : AVATAR_INTERFACE){
    // const avatar = createAvatar(adventurerNeutral, {
    //     seed: nameUser
    // });

    // const svg = avatar.toString();

    return <StyleAvatar nameUser={nameUser} title={nameUser} click={click} tamanho={tamanho} showPoints={showPoints}>
        <div className="avatar">
            {/* <SVG src={svg}></SVG> */}
        </div>

        <span>{nameUser}</span>

        {
            showPoints && showPoints === true && (
                <div className="pontuacao">
                    {points}
                </div>
            )
        }
        
    </StyleAvatar>
}