import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Story = () => {
    return (
        <View>
            <Image 
                source={{uri='https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?fakeurl=1&type=.jpg'}}
                style={{width: 50, height: 50}} />
            <Text>Channel Sample</Text>
        </View>
    );
};

export default function PropDinamis() {
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </View>
    );
}

const styles = StyleSheet.create({});
