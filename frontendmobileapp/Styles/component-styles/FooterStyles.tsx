import { StyleSheet } from "react-native";
import theme from "../../Styles/Variables"

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 20, 
        paddingTop: 5,
        marginTop: 0,
        justifyContent: 'space-between', 
      },
      activeIcon: {
        color: theme.colors.primaryBlue
    },
  icon: {
    color: theme.colors.iconNotActive
}
})

export default styles 