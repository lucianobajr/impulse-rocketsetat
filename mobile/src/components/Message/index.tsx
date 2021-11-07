import React from "react";
import { Text, View } from "react-native";

import { MotiView } from "moti";
import UserPhoto from "../UserPhoto";
import { styles } from "./styles";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export type Props = {
  data: MessageProps;
};

const Message: React.FC<Props> = ({ data }) => {
  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
    >
      <Text style={styles.mensagem}>{data.text}</Text>

      <View style={styles.footer}>
        <UserPhoto imageUri={data.user.avatar_url} sizes="SMALL" />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
};

export default Message;
