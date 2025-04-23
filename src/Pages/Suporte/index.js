export * from './Dicas';
export * from './Forms';
export * from './Header';
export * from './NavS';
export * from './FooterS'

import React from 'react';
import { View } from 'react-native'
import NavS from './NavS';
import Header from './Header';
import Forms from './Forms';
import FooterS from './FooterS';
import Dicas from './Dicas';

export default function TelaSuporte(){
    return(
        <View>
            <NavS/>
            <Header/>
            <Forms/>
            <Dicas/>
        </View>
    )
}