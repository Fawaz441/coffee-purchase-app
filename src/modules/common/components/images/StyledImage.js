import { Image } from 'react-native'
import React from 'react'

const ContainImage = ({ source, height, width, isDefault = false, styles }) => {
    return (
        <Image
            source={source}
            {...isDefault && { defaultSource: source }}
            style={{ width, height, ...styles }}
            resizeMode='contain'
        />
    )
}

const CoverImage = ({ source, height, width, isDefault = false, styles }) => {
    return (
        <Image
            source={source}
            {...isDefault && { defaultSource: source }}
            style={{ width, height, ...styles }}
            resizeMode='cover'
        />
    )
}


export {
    CoverImage,
    ContainImage
}
