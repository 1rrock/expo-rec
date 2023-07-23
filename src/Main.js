import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style/StyleSheet";

import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import { createStackNavigator } from "@react-navigation/stack"; // 스택 네비게이션 라이브러리 불러오기

import Home from "./pages/Home";
import List from "./pages/List";
import Discript from "./pages/Discript";
import Media from "./pages/Media";
import Record from "./pages/Record";

const Main = () => {
    const Stack = createStackNavigator();
    return (
        <View style={styles.main}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="List" component={List} />
                    <Stack.Screen name="Discript" component={Discript} />
                    <Stack.Screen name="Media" component={Media} />
                    <Stack.Screen name="Record" component={Record} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
export default Main;