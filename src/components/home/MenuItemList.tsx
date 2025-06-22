import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import menuItemModel from "../../interfaces/menuItemModel";
import MenuItemCard from "./MenuItemCard";
import styles from "./MenuItemList.style";

export default function MenuItemList() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://8a7a-202-28-123-199.ngrok-free.app/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuItemCard menuItem={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
