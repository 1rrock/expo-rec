import { Text, View } from "react-native";
import styles from "../style/StyleSheet";
const Media = ({ route }) => {
    return (
        <View style={{marginTop: 42, marginLeft: 57}}>
            <View style={styles.listTitleWrap}>
                <View style={styles.listLine} />
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{route.params.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{route.params.subTitle}</Text>
                </View>
            </View>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, marginLeft: 40, width: '60%', height: '60%', borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                <Text>영상, 사진 영역</Text>
            </View>
        </View>
    )
};
export default Media;