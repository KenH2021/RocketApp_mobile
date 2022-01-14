import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
// import StartupScreen from './components/StartupScreen'
import Navigation from './components/Navigation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
      {/* <StartupScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
