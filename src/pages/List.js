import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from "../style/StyleSheet";
import { Image } from 'expo-image';
import bgImg from '../assets/images/bg.png';
import bgImg2 from '../assets/images/bg2.png';
import SideBar from "../components/SideBar";
import containers from "../style/Containers";


const List = ({ navigation, route }) => {
    const listData = [
        // 대 제목 폴더에서 대 제목 리스트
        {
            key: 1,
            title: '내용의 세부 항목1', // 내부의 세부 항목 폴더명
            subTitle: '해당내용의 부제1', // 내부의 세부 항목 안의 부제 txt 파일
            media: true
        },
        {
            key: 2,
            title: '내용의 세부 항목2',
            subTitle: '해당내용의 부제2',
            media: false
        },
        {
            key: 3,
            title: '내용의 세부 항목3',
            subTitle: '해당내용의 부제3',
            media: false
        }
    ];
    const onClickList = (e) => {
        const result = {
            idx: e.key,
            title: e.title,
            subTitle: e.subTitle,
            media: e.media
        };
        navigation.navigate('Discript', result);
    };

    return (
        <View style={containers.home}>
            <SideBar navigation={navigation} />
            <View style={containers.contents}>
                <Image style={styles.bg} contentPosition={"top right"} contentFit='contain' source={bgImg} />
                <Image style={styles.bg2} contentPosition={"bottom left"} contentFit='contain' source={bgImg2 } />
                <View style={styles.listPage}>
                    <View style={styles.listTitleWrap}>
                        <View style={styles.listLine} />
                        <View>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{route.params.title}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{route.params.subTitle}</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.list}>
                        <View style={styles.ul}>
                            {
                                listData.map(data=>{
                                    return (
                                        <TouchableOpacity key={data.key} style={styles.li} onPress={() => onClickList(data)}>
                                            <View style={styles.liDot2} />
                                            <View style={styles.listTextWrap}>
                                                <Text style={styles.listText}>{data.title}</Text>
                                                <Text style={styles.listScript}>{data.subTitle}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                        
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default List;