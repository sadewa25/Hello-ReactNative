import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImgSvg from '../../assets/image/undraw.svg';

export default function ReactSvg() {
    return (
        <View>
            <Text>Materi Menggunakan File SVG</Text>
            <ImgSvg width={244} height={125} />
        </View>
    );
};

const styles = StyleSheet.create({});
