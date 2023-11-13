'use client'

import Logo from '@/components/Header/Logo'
import Menu from '@/components/Header/Menu'

export default function Header(props: any) {
    return (
        <>
        {props.name}
        {props.age}
        {props.isMan ? 'is a man' : 'is a woman'}
        <Logo />
        <Menu {...props} />
        </>
    )
};