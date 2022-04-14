import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
      width: '100%',
      marginVertical: 12,
    },
    image: {
      width: 128,
      height: 128,
      marginBottom: 12,
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
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
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