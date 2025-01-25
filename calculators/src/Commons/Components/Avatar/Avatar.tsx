import React from 'react';
import "./Avatar.scss";
import { useSelector } from 'react-redux';

const Avatar = () => {
    const name = useSelector((state: any) => state?.initialName)
    return (
        <div className='avatar-wrapper'>{name}</div>
    )
}

export default Avatar