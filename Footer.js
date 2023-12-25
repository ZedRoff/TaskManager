import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBox } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Link to="/">
                <FontAwesomeIcon icon={faHome} style={styles.icon} size={25} />
            </Link>

            <Link to="/tasks"> 
                <FontAwesomeIcon icon={faBox} style={styles.icon} size={25} />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#E2E2E2",
        height: 50,
        alignSelf: "flex-end",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    icon: {
        color: "#2E2E2E",
        fontWeight: "bold"
    }
});

export default Footer;
