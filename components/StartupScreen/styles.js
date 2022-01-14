import { StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    bgkContainer: {
        width: '100%',
        height: '100%',
        alignItems:'center',

        },
    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        },
    logo: {
        width: '75%',
        height: '100%',
        resizeMode: 'contain',
        top: 0,
        },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems:'center',
        },
    title: {
        fontSize: 40,
        fontWeight: '600',
        },
    input: {
        bottom: 150,
        alignItems:'center',
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
});


export default styles;