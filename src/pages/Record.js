import { View, Text } from "react-native";
import containers from "../style/Containers";
import SideBar from "../components/SideBar";
import styles from "../style/StyleSheet";

import MicImg from '../assets/images/mic-big.svg'

const Record = ({navigation, route}) => {
    return (
        <View style={containers.home}>
            <SideBar navigation={navigation} />
            <View style={styles.recordContainer}>
                <View style={styles.recordLeft}>
                    <View style={styles.recordIconWrap}>
                        <View style={styles.recordIconCircle}>
                            <MicImg />
                        </View>
                    </View>
                </View>
                <View style={styles.recordRight}>
                    
                </View>
            </View>
        </View>
    )
};
export default Record;