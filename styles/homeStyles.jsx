import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: '#004ae6',
    },
    registerButton: {
        width: '100%',
        marginVertical: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 12,
    },
    header: {
        fontSize: 26,
        color: '#004ae6',
        fontWeight: 'bold',
        paddingVertical: 14,
    },
    subheader: {
        fontSize: 16,
        lineHeight: 26,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 14,
    },
});

export default styles