import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import Grid from "react-native-grid-component";
import { connect } from "react-redux";
import { loadInitialList, loadMorePhotos } from "./redux/actions";
import { MAIN_COLOR } from "./constants/layout";

function optimizedDescription(description) {
  if (description.length < 15) return description.trim();
  return description.trim().slice(0, 15) + "...";
}

function Application(props) {
  useEffect(() => {
    props.loadInitialPhotos();
  }, []);

  const openFullSizePicture = urlFullPicture => {
    props.navigation.navigate("Post", {
      itemId: urlFullPicture
    });
  };

  const gridItem = (data, i) => (
    <View style={styles.gridItem} key={i}>
      <Image
        style={styles.gridImage}
        onTouchEnd={() => openFullSizePicture(data.urls.regular)}
        source={{ uri: data.urls.small }}
      />
      <View style={styles.imageCapture}>
        <Text>
          {data.user.name ? optimizedDescription(data.user.name) : null}
        </Text>
        <Text>
          {data.description ? optimizedDescription(data.description) : null}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView>
      {props.photoArray === undefined ? (
        <ActivityIndicator />
      ) : (
        <>
          <Grid
            style={styles.list}
            data={props.photoArray}
            renderItem={gridItem}
            numColumns={2}
          />
          <AwesomeButton
            onPress={props.loadMore}
            backgroundColor={MAIN_COLOR}
            stretch
          >Load more</AwesomeButton>
        </>
      )}
    </ScrollView>
  );
}

const mapStateToProps = state => {
  return {
    photoArray: state.listOfPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInitialPhotos: () => dispatch(loadInitialList()),
    loadMore: () => dispatch(loadMorePhotos())
  };
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 200,
    marginVertical: 10,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    flex: 1
  },
  gridImage: {
    width: "100%",
    height: 160
  },
  imageCapture: {
    borderColor: "black",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    width: "100%",
    alignItems: "center"
  }
});

Application.navigationOptions = {
  headerTitle: "Unsplash API"
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
