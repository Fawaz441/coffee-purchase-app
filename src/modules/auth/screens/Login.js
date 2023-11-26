import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import LAYOUT from '../../../assets/styles/layout'
import COLORS from '../../../assets/styles/colors'
import { ContainImage, Container } from '../../common/components'
import COMMON_ICONS from '../../common/assets/icons'

const Login = () => {
    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.arrowSpace}>
                    <ContainImage
                        source={COMMON_ICONS.leftArrow}
                        height={16}
                        width={24}
                    />
                </View>
            </View>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    arrowSpace: {
        marginTop: 8,
        marginBottom: 30
    }
})