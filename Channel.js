import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBox } from "@fortawesome/free-solid-svg-icons" 
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
export default function Home() {

  return (
    <SafeAreaView style={styles.container}>

<Header title="Channel" />
    <ScrollView style={styles.centered}>
   
 </ScrollView>


<Footer />

</SafeAreaView>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#2E2E2E",
    flex: 1,
    flexDirection: "column"
   
  },
    centered: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#2E2E2E",
        padding: 16,
        margin: 20,
        borderRadius: 20,
        color: "#fff"
    },
  
})
