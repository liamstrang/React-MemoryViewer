import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
      width: '100%',
      marginVertical: 12,
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: 12,
    },
    radio: {
      fontSize: 12,
      lineHeight: 26,
      color: 'grey',
      textAlign: 'center',
      marginBottom: 14,
    },
    input: {
      backgroundColor: 'white',
    },
    header: {
      fontSize: 26,
      color: '#004ae6',
      fontWeight: 'bold',
      paddingVertical: 14,
    },
    error: {
      fontSize: 14,
      color: 'red',
      paddingHorizontal: 4,
      paddingTop: 4,
      textAlign: 'center',
    },
    subheader: {
      fontSize: 19,
      lineHeight: 26,
      color: 'grey',
      textAlign: 'center',
      marginBottom: 14,
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
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
});

export default styles