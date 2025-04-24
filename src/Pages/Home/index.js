import React from "react";
import { View, Button, Text, ScrollView,  } from "react-native"
import Footer from "./Footer/index"
import Main from "./Main/index"
import Nav from "./Nav/index"

export default function TelaHome(){
    return (
        <View>
            <ScrollView>
                <Nav/>
                <Main/>
            </ScrollView>
        </View>
    )
}