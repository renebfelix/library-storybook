import React from "react"
import { StyleAvatar } from "./style"

interface AVATAR_INTERFACE {
    children: any
}

export function Avatar({children} : AVATAR_INTERFACE){
    return <StyleAvatar>{children}</StyleAvatar>
}