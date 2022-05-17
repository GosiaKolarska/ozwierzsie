import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IconDelete } from "./favStyle";
const screenWidth = Dimensions.get("screen").width;
const DATA = [
  {
    id: "1",
    name: "Biszkopt",
    source: require("./../../assets/IMG_2847.jpeg"),
    age: "4 miesięce",
  },
  {
    id: "2",
    name: "Grześ",
    source: require("./../../assets/IMG_3291.jpeg"),
    age: "6 miesięcy",
  },
  {
    id: "3",
    name: "Nairobi",
    source: require("./../../assets/IMG_4100.jpeg"),
    age: "2 lata",
  },
];

const Item = ({ name, age, source, removeFav, navigation, datap }) => (
  <TouchableOpacity
   activeOpacity={0.9}
    onPress={() =>
      navigation.navigate("CardExtended", { datap })
    }
    style={styles.item}
  >
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{
          width: screenWidth / 5,
          height: screenWidth / 5,
          marginRight: 10,
        }}
        source={source}
      />
      <View>
        <Text>{name}</Text>
        <Text>{age}</Text>
      </View>
    </View>
    <TouchableOpacity activeOpacity={0.7} onPress={removeFav}>
      <IconDelete />
    </TouchableOpacity>
  </TouchableOpacity>
);

const App = ({ navigation }) => {
  const [favList, setFavList] = useState();
  const isFocused = useIsFocused();

  const fecthFav = async () => {
    let localState = await AsyncStorageLib.getItem("favList");
    let favData = JSON.parse(localState || "[]");
    setFavList(favData);
  };

  useEffect(() => {
    fecthFav();
  }, [isFocused]);

  const removeFav = async (item) => {
    let localState = await AsyncStorageLib.getItem("favList");
    let favData = JSON.parse(localState || "[]");
    const newFav = favData.filter((x) => x.id !== item.id);
    await AsyncStorageLib.setItem("favList", JSON.stringify(newFav));
    setFavList(newFav);
    // setRefresh(!refresh);
  };

  const renderItem = ({ item }) => (
    <Item
      removeFav={() => removeFav(item)}
      name={item.name}
      age={item.age}
      datap={item}
      source={item.source}
      navigation={navigation}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Favourite List:</Text>
      <FlatList
        data={favList || []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
  },
});

export default App;
