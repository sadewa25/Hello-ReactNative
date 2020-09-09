import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import cart from '../../assets/icon/smart_cart.png'

export default function Position() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center'},
    cartWrapper: {
        borderWidth:1, 
        borderColor:'#4398D1', 
        width: 93, 
        height: 93,
        position: 'relative',
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems:'center'},
    iconCart: {width: 50, height: 50},
    text: {
        marginTop: 16,
        fontSize: 24
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#76d275',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
})
