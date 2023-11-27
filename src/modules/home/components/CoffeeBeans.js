import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product, TextMedium } from '../../common/components'
import COLORS from '../../../assets/styles/colors'
import { FlashList } from '@shopify/flash-list'
import { cofeeTypes } from '../../common/utils/constants'
import COMMON_IMAGES from '../../common/assets/images'

const products = [
    { category: cofeeTypes.Cappuccino, description: "Medium Roasted", price: '4.20', image: COMMON_IMAGES.coffeebeans1 },
    { category: cofeeTypes.Cappuccino, description: "With Steamed Milk", price: '4.20', image: COMMON_IMAGES.coffeebeans2 },
    { category: cofeeTypes.Cappuccino, description: "With Steamed Milk", price: '4.20', image: COMMON_IMAGES.coffeebeans3 },
    { category: cofeeTypes.Cappuccino, description: "With Steamed Milk", price: '4.20', image: COMMON_IMAGES.coffeebeans4 },

]

const CoffeeBeans = () => {
    return (
        <View>
            <TextMedium style={styles.header}>Coffee beans</TextMedium>
            <FlashList
                contentContainerStyle={{ paddingHorizontal: 30 }}
                data={products}
                horizontal
                estimatedItemSize={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <Product
                        image={item.image}
                        category={item.category}
                        price={item.price}
                        description={item.description}
                    />
                )}
            />
        </View>
    )
}

export default CoffeeBeans

const styles = StyleSheet.create({
    header: {
        color: COLORS.white,
        marginBottom: 19,
        fontSize: 16,
        lineHeight: 20,
        marginLeft: 30,
        marginTop: 23.32
    }
})