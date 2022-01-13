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
    subtitle: {
    },
});


export default styles;