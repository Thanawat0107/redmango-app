import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../common/theme";


const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        paddingTop: SIZES.xLarge,
        paddingLeft: SIZES.small/2,
        backgroundColor: COLORS.white
    },
    separator: {
        height: 16
    }
   
})

export default styles;