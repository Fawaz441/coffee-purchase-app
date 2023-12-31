import { Image } from 'react-native'
import React from 'react'

const ContainImage = ({ source, height, width, isDefault = false, style }) => {
    return (
        <Image
            source={source}
            {...isDefault && { defaultSource: source }}
            style={{ width, height, flexShrink: 0, ...style }}
            resizeMode='contain'
        />
    )
}

const CoverImage = ({ source, height, width, isDefault = false, style }) => {
    return (
        <Image
            source={source}
            {...isDefault && { defaultSource: source }}
            style={{ width, height, flexShrink: 0, ...style }}
            resizeMode='cover'
        />
    )
}


export {
    CoverImage,
    ContainImage
}
