import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import { ScaleWidth, ScaleHeight } from "../utils/Dimensions";
const { width } = Dimensions.get("window");

const UserCard = ({ name, interests, deleteUser }) => {
  const [interestList, setInterestList] = useState(interests);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.interestItem}>
        <Text>{item?.name}</Text>
        <TouchableOpacity
          onPress={() =>
            setInterestList(
              interestList.filter((itemx) => itemx.id !== item.id)
            )
          }
          style={styles.deleteInterest}
        >
          <AntDesign name="delete" size={ScaleWidth(14)} color={Colors.black} />
        </TouchableOpacity>
      </View>
    );
  };
  const _keyExtractor = (item, index) => index + "";
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <FlatList
          key={"_"}
          style={styles.flatList}
          numColumns={3}
          data={interestList}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
        />
      </View>

      <TouchableOpacity onPress={deleteUser} style={styles.deleteUser}>
        <AntDesign
          name="deleteuser"
          size={ScaleWidth(20)}
          color={Colors.darkGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - ScaleWidth(25),
    padding: ScaleWidth(15),
    backgroundColor: Colors.white,
    alignSelf: "center",
    flexDirection: "row",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    elevation: 1,
    marginHorizontal: ScaleWidth(25),
    marginVertical: ScaleWidth(10),
    borderRadius: ScaleWidth(10),
  },
  name: {
    fontSize: ScaleWidth(16),
    marginLeft: ScaleHeight(14),
    color: Colors.black,
    textAlign: "left",
    fontWeight: "bold",
  },

  flatList: {
    marginTop: ScaleHeight(10),
    marginLeft: ScaleHeight(10),
  },
  interestItem: {
    height: ScaleHeight(30),
    borderRadius: ScaleWidth(15),
    backgroundColor: Colors.grey,
    padding: ScaleWidth(7),
    margin: ScaleWidth(3),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  deleteInterest: { marginLeft: ScaleWidth(5) },
  deleteUser: {
    position: "absolute",
    right: ScaleWidth(20),
    top: ScaleWidth(15),
  },
});

export default UserCard;
