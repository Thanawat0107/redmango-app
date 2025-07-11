import { View, StyleSheet, Modal, ScrollView, Pressable } from "react-native";
import { COLORS } from "../../common";
import { JSX } from "react";

interface Props<T> {
  visible: boolean;
  onRequestClose(state: boolean): void;
  options: T[];
  renderItem(item: T): JSX.Element;
  onPress(item: T): void;
}

const OptionModal = <T extends unknown>({
  visible,
  options,
  renderItem,
  onPress,
  onRequestClose,
}: Props<T>) => {
  const handleClose = () => onRequestClose(!visible);

  return (
    <Modal transparent visible={visible} onRequestClose={handleClose}>
      <Pressable onPress={handleClose} style={styles.container}>
        <View style={styles.innerContainer}>
          <ScrollView>
            {options.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    onPress(item);
                    handleClose();
                  }}
                >
                  {renderItem(item)}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: COLORS.backDrop,
  },
  innerContainer: {
    width: "100%",
    backgroundColor: COLORS.deActive,
    padding: 10,
    borderRadius: 7,
    maxHeight: 200,
  },
});

export default OptionModal;