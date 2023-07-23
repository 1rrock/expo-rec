import { Text, TouchableOpacity, View } from "react-native";
import HomeIcon from '../assets/images/home.svg';
import MicIcon from '../assets/images/mic.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "../style/StyleSheet";
const SideBar = ({navigation, onClickRec}) => {
    const onClickHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.sideBar}>
            <TouchableOpacity onPress={onClickHome} style={styles.sideBarBtn}><HomeIcon /></TouchableOpacity>
            <View>
                <TouchableOpacity onPress={onClickRec} style={styles.sideBarBtn}><MicIcon /></TouchableOpacity>
                <TouchableOpacity style={styles.sideBarBtn}><FolderIcon /></TouchableOpacity>
            </View>
        </View>
    )
};
export default SideBar;