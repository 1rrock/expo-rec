import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import styles from "../style/StyleSheet";
import { Image } from 'expo-image';

import exampleImg from '../assets/images/example.png';
import bgImg from '../assets/images/bg.png';
import bgImg2 from '../assets/images/bg2.png';
import containers from "../style/Containers";
import SideBar from "../components/SideBar";

const Discript = ({ navigation, route }) => {
    const discriptData = {
        text: '내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. 내용이 여기에 표시됩니다. ',
    }

    const onClickMedia = () => {
        navigation.navigate('Media', route.params);
    };

    const onClickRec = () => {
        navigation.navigate('Record');
    }

    return (
        <View style={containers.home}>
            <SideBar navigation={navigation} onClickRec={onClickRec} />
            <View style={containers.contents}>
                <Image style={styles.bg} contentFit='cover' source={bgImg } />
                <Image style={styles.bg2} contentFit='cover' source={bgImg2 } />
                <View style={route.params.media ? styles.discriptMediaPage : styles.discriptPage}>
                    {
                        route.params.media ? ( // media 있을 때
                            <>
                                <View style={styles.discriptMediaLeft}>
                                    <View style={styles.listTitleWrap}>
                                        <View style={styles.listLine} />
                                        <View>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{route.params.title}</Text>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{route.params.subTitle}</Text>
                                        </View>
                                    </View>
                                    <ScrollView style={styles.discriptTextScroll}>
                                        <View style={styles.discriptTextWrap}>
                                            <Text>{discriptData.text}</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={styles.discriptMediaRight}>
                                    <ScrollView style={styles.discriptMediaScroll}>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => onClickMedia()}>
                                            <Image style={styles.image} contentFit='contain' source={exampleImg} />
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
                            </>
                        )
                        : ( // media 없을 때
                            <>
                                <View style={styles.listTitleWrap}>
                                    <View style={styles.listLine} />
                                    <View>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{route.params.title}</Text>
                                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{route.params.subTitle}</Text>
                                    </View>
                                </View>
                                <ScrollView style={styles.discriptTextScroll}>
                                    <View style={styles.discriptTextWrap}>
                                        <Text>{discriptData.text}</Text>
                                    </View>
                                </ScrollView>
                            </>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default Discript;