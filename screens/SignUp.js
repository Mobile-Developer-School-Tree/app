import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'
import Header from '../components/Header'
import Row from '../components/Row'
import Button from '../components/Button'
import Spacer from '../components/Spacer'

export default function SignUp() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <ScrollView>
            <View style={styles.loginSpace}>
                <Header><Text>Nome App</Text></Header>
                <Spacer size={30} />
                <Title title={'Registrati'}></Title>
                <Label label={'Email'} type="email-address" />
                <Input />
                <Label label={'Nome Utente'} />
                <Input />
                <Label label={'Password'} />
                <Input isPassword={true} />
                <Label label={'Ripeti Password'} />
                <Input isPassword={true} />
                <Row>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Ho letto e accetto la normativa della Privacy</Text>
                </Row>
                <Button name={'ISCRIVITI'} />


            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#eaeaea"
    },
    loginSpace: {
        flex: 1,
        alignItems: 'center',
    }
})