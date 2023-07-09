import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey everyone, my name is Gilberto Calvillo!</Text>
      <Image source={require('../GilApp/assets/favicon.png')} style={styles.dogImage} />
    <Text> My main passion in life is video games and I also like to collect action figures. Some of the recent games I have played have been Tears of The Kingdom, Star Wars: Jedi Survivor, and Hogwarts Legacy. I think paintings are pretty cool, I forgot the name, but below is one I like.</Text>
    <Image source={require('../GilApp/assets/paint.png')} style={styles.headerImage} />
    <Text> The reason I chose the role of Product Manager is, because it is a role I am well experienced in. While I didn't have the role last year innitally, due to unforseen circumstances at that time I had to step up as both Srum Leader, and Product Manager. The skills the role of PM gave me were pretty useful in my day to day life that I even used actively in school!</Text>
    <Text> Initally my dream career was to be a video game designer. However, I've had a switch in ideas, but not completely. I do want to make video games, however I want to make them independently as a way to tell, and create stories others can enjoy.</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
headerImage: {
  width: 310,
  height: 220,
},
dogImage: {
  width: 25,
  height: 25,
}
});

