import React from 'react';
import { View, StyleSheet, Image, Platform, StatusBar } from 'react-native';

export default function NavigationBar() {
    return (
        <View style={styles.navBar} >
        <Image source = {require("../images/logo.png")} />
        <Image source = {require("../images/hamburgerMenu.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
        paddingRight: 20,
        width: "100%",
        backgroundColor: "#fcfcfd",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
