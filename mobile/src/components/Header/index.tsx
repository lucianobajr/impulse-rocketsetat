import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import UserPhoto from "../UserPhoto";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/lucianobajr.png" />
      </View>
    </View>
  );
};

export default Header;
