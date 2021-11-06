import React from "react";

import { View } from "react-native";
import Header from "../../components/Header";

import { styles } from "./styles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
