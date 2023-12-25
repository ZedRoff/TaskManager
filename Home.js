import React from "react";
import { SafeAreaView, ScrollView, StyleSheet} from "react-native";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Main />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#2E2E2E",
  },
});

export default Home;
