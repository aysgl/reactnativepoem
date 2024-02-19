import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigation/NativeStackNavigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}

const data = [
  {
    id: '1',
    author: 'Özdemir Asaf',
    desc: `Geleceğim, bekle dedi, gitti...
Ben beklemedim, o da gelmedi.
Ölüm gibi bir şey oldu...
Ama kimse ölmedi.`,
    color: '#00DC74',
  },
  {
    id: '2',
    author: 'Cemal Süreya',
    desc: `Ölüyorum tanrım
Bu da oldu işte.
Her ölüm erken ölümdür
Biliyorum tanrım.
Ama, ayrıca, aldığın şu hayat
Fena değildir...
Üstü kalsın...`,
    color: '#0065FF',
  },
  {
    id: '3',
    author: 'Özdemir Asaf',
    desc: `Sana gitme demeyeceğim.
Üşüyorsun ceketimi al.
Günün en güzel saatleri bunlar.
Yanımda kal.
   
Sana gitme demeyeceğim.
Gene de sen bilirsin.
Yalanlar istiyorsan yalanlar söyleyeyim,
İncinirsin.
   
Sana gitme demeyeceğim,
Ama gitme, Lavinia.
Adının gizleyeceğim
Sen de bilme, Lavinia.`,
    color: '#E6A900',
  },
];

const Item = ({data}: {data: any}) => (
  <View style={(styles.bg, {backgroundColor: data.color})}>
    <Section title={data.author}>
      <Text style={styles.text}>{data.desc}</Text>
    </Section>
  </View>
);

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'transparent',
  };

  const renderItem = ({item}: any) => <Item data={item} />;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 70,
    fontWeight: '100',
    paddingTop: 80,
    color: 'white',
    width: 300,
  },
  text: {
    fontSize: 22,
    lineHeight: 36,
    color: 'white',
    paddingBottom: 300,
  },
  bg: {
    backgroundColor: '#00DC74',
    paddingBottom: 300,
  },
});

export default App;
