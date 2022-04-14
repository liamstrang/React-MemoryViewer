import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
      fontSize: 26,
      color: '#004ae6',
      fontWeight: 'bold',
      paddingVertical: 14,
      textAlign: 'center'
    },
    subheader: {
      fontSize: 19,
      lineHeight: 26,
      color: 'grey',
      textAlign: 'center',
      marginBottom: 14,
    },
    image: {
      width: 128,
      height: 128,
      marginBottom: 12,
    },
    container: {
      flex: 1,
      paddingTop: 80,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      marginVertical: 10,
    },
});

export default styles