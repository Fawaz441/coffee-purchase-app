import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import LAYOUT from '../../../assets/styles/layout'
import COLORS from '../../../assets/styles/colors'
import { Product, Space, TextSemiBold } from '../../common/components'
import COMMON_IMAGES from '../../common/assets/images'
import { FlashList } from '@shopify/flash-list'
import { cofeeTypes } from '../../common/utils/constants'


const coffeeTypeList = Object.keys(cofeeTypes)

const products = [
    { category: cofeeTypes.Cappuccino, description: "With Steamed Milk", price: '4.20', rating: 4.5, image: COMMON_IMAGES.cappuccino },
    { category: cofeeTypes.Cappuccino, description: "With Foam", price: '4.20', rating: 4.2, image: COMMON_IMAGES.cappuccino2 },

]

const CoffeeList = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(coffeeTypeList[0])
    return (
        <View>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Space space={30} horizontal />
                    {coffeeTypeList.map((coffeeType, index) => {
                        const isActive = activeTab === coffeeType
                        return (
                            <TouchableWithoutFeedback key={index} onPress={() => {
                                if (activeTab !== coffeeType) {
                                    setActiveTab(coffeeType)
                                }
                            }}>
                                <View style={styles.item}>
                                    <TextSemiBold style={[styles.item_text, isActive && styles.active_item_text]}>{coffeeType}</TextSemiBold>
                                    <View style={styles.coffee_type_dot_container}>
                                        <View style={[styles.coffee_type_dot, isActive && styles.active_item_coffee_type_dot]} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                    <Space space={30} horizontal />
                </ScrollView>
            </View>
            <View>
                <FlashList
                    contentContainerStyle={{ paddingHorizontal: 30 }}
                    data={products}
                    horizontal
                    estimatedItemSize={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        <Product
                            navigation={navigation}
                            image={item.image}
                            category={item.category}
                            price={item.price}
                            rating={item.rating}
                            description={item.description}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default CoffeeList

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
        marginBottom: 22
    },
    item: {
        marginRight: 19
    },
    item_text: {
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.faintWhite,
    },
    active_item_text: {
        color: COLORS.primary
    },
    coffee_type_dot_container: {
        marginTop: 6,
        alignItems: "center"
    },
    coffee_type_dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "transparent"
    },
    active_item_coffee_type_dot: {
        backgroundColor: COLORS.primary
    }
})