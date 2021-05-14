import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import styles from "./style";
import UserCard from "../../components/UserCard";
import users from "../../fixtures/users.json";
import Interests from "../../fixtures/interests.json";

const Users = () => {
  const sortedUserList = users.sort(
    (a, b) => parseFloat(b.following.length) - parseFloat(a.following.length)
  );

  const [usersList, setUsersList] = useState(sortedUserList);

  const renderItem = ({ item }) => {
    const interests = [];
    Interests?.filter((interest) => {
      item?.interests?.filter((item) => {
        if (item == interest.id) {
          interests.push(interest);
        }
      });
    });
    return (
      <UserCard
        item={item}
        name={item.name}
        interests={interests}
        deleteUser={() =>
          setUsersList(usersList.filter((itemx) => itemx.id !== item.id))
        }
      />
    );
  };

  const _keyExtractor = (item, index) => index + "";

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={usersList}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Users;
