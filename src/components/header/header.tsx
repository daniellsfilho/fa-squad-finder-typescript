import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../../pages/home/home";
import ProfilePage from "../../pages/profile/profile";
import { SessionController } from "../../session/sessionController";
import { useState } from "react";

export default function Header() {

    return (
        <>
            <View style={styles.header}>
                <Pressable>
                    <FontAwesomeIcon icon={faBars} style={styles.menuIcon} size={30} />
                </Pressable>
                <FontAwesomeIcon icon={faUserCircle} style={styles.menuIcon} size={30} />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: '#e51c44',
        top: 0,
        height:75,
        width: '100%',
    },
    menuIcon: {
        color: '#fff',
        margin: 15
    }
})