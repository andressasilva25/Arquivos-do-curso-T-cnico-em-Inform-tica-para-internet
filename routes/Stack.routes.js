
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./Tab.routes";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="inicio"
            component={TabRoutes}
            />
        </Stack.Navigator>
        
    )
}