import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BasicJavascript() {
    //primitive
    const name = 'Prawito Hudoro';
    let age =24;
    const isMale = true;

    //complex
    const hewanPeliharaan = {
        name: 'Miaw',
        type: 'cat',
        age: 4,
        isLocalPet: true,
        color: 'yellow',
        parent: {
            male: 'Kairsa',
            female: 'Kuinn'
        },
    };//object

    const CallPerson = objectPet => {
        // let result = '';
        // if(hewanPeliharaan.name === 'Miaw'){
        //     result = 'How Are You?';
        // }else{
        //     result = 'This is Animal';
        // }
        return hewanPeliharaan.name === 'Miaw'? 'Hello Miaw' : 'This is animal';
    };//function

    const namePerson = ['Rubi','Diantara','Malu'];

    return (
        <View>
            <Text>
                Materi Basic JS di React Native
            </Text>

            <Text>Name: {name}</Text>
            <Text>Age: {age}</Text>
            <Text>{ CallPerson(hewanPeliharaan) }</Text>

            <Text> {namePerson[0]} </Text>
            <Text> {namePerson[1]} </Text>
            <Text> {namePerson[2]} </Text>

            <Text>================</Text>
            {namePerson.map(person =>(
                <Text>{person}</Text>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({});
