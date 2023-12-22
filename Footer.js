import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBox } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    
      return (
        <View style={styles.footer}>
  
        <Pressable onPress={() => alert("test")}>
          <FontAwesomeIcon icon={faHome}  style={styles.header_element} size={25} />
          </Pressable>
      
          <Pressable onPress={() => alert("test")}> 
          <FontAwesomeIcon icon={faBox} style={styles.header_element} size={25} />
          </Pressable>
      
          <Pressable onPress={() => alert("test")}>
             <FontAwesomeIcon icon={faUser} style={styles.header_element} size={25} />
             </Pressable>
         
      
        
         
      </View>
      )
    }
    const styles = StyleSheet.create({
    
        footer: {
          backgroundColor:"#E2E2E2",
          height:50,
        alignSelf: "flex-end",
         
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
          
        },
        header_element: {
          color: "#2E2E2E",
          fontWeight: "bold"
      
        }
      })
      