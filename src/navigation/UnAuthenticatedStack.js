import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreens from "../modules/auth/screens"
import SCREENS from "./screens";

const Stack = createNativeStackNavigator()


const UnAuthenticatedStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.Login}>
            <Stack.Screen name={SCREENS.Login} component={AuthScreens.Login} />
            <Stack.Screen name={SCREENS.Signup} component={AuthScreens.Signup} />
        </Stack.Navigator>
    )
}

export default UnAuthenticatedStack