import React from "react";
import { View, Image, StyleSheet } from "react-native";

function PostScreen(props) {
  return (
    <View>
      <Image
        style={styles.fullImage}
        source={{
          uri: props.navigation.getParam(
            "itemId",
            "https://cdn2.iconfinder.com/data/icons/oops-404-error/64/208_404-error-oops-page-browser-11-512.png"
          )
        }}
      />
    </View>
  );
}

PostScreen.navigationOptions = {
  headerTitle: "Image Card"
};

const styles = StyleSheet.create({
  fullImage: {
    width: "100%",
    height: "100%"
  }
});

export default PostScreen;
