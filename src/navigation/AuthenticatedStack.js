import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREENS from './screens';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import ICONS from '../assets/icons';
import { ContainImage } from '../modules/common/components';
import COLORS from '../assets/styles/colors';
import LAYOUT from '../assets/styles/layout';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const TABS = {
    HomeTab: "HomeTab",
    ShopTab: "ShopTab",
    FavouritesTab: "FavouritesTab",
    NotificationsTab: "NotificationsTab"
}

const TAB_ICONS = {
    [TABS.HomeTab]: ICONS.home,
    [TABS.ShopTab]: ICONS.bag,
    [TABS.FavouritesTab]: ICONS.favourites,
    [TABS.NotificationsTab]: ICONS.notifications
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 89, backgroundColor: COLORS.background }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const icon = TAB_ICONS[label]

                return (
                    <TouchableWithoutFeedback
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <View style={[LAYOUT.flex1, LAYOUT.centers]}>
                            <ContainImage
                                source={icon}
                                style={{ tintColor: isFocused ? COLORS.primary : "#4E5053" }}
                                height={24}
                                width={24}
                                isDefault
                            />
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
}


function Tabs() {
    return (
        <Tab.Navigator initialRouteName='HomeTab' screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name={TABS.HomeTab} component={HomeScreen} />
            <Tab.Screen name={TABS.ShopTab} component={HomeScreen} />
            <Tab.Screen name={TABS.FavouritesTab} component={HomeScreen} />
            <Tab.Screen name={TABS.NotificationsTab} component={HomeScreen} />
        </Tab.Navigator>
    )
}

const AuthenticatedStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.App} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.App} component={Tabs} />
        </Stack.Navigator>
    )
}

export default AuthenticatedStack