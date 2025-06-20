import { StyleSheet, Text, View } from "react-native";
import React from "react";
import menuItemModel from "../../interfaces";

interface Props {
  menuItem: menuItemModel;
}
const MenuItemCard = (props: Props) => {
  return (
    <View>
      <Text>More actions</Text>
      <Text>MenuItemCard</Text>
      <Text>{props.menuItem.name}</Text>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({});
