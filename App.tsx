import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { EjemploClase } from './classes/EjemploClase'; 
// cuando importamos algo que fue exportado como default
// no son necesarias las llaves
// ADEMÁS puedo ponerle el nombre que quiera
import Chucho, { PerritoRow } from './classes/Perrito';
import EjemploRequest from './classes/EjemploRequest';
import FunctionRequest from './classes/FunctionRequest';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// component
// - instanciable 
// - reutilizable
// componente es el elemento de construcción fundamental de react
// todas las UI están hechan de componentes
// todos los componentes están hechos de componentes más sencillos

export default function App() {
  var Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Principal"
          component={Principal}
        />
        <Stack.Screen 
          name="EjemploFuncion"
          component={EjemploFuncion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 2 maneras de definir componentes:
// 1 - por medio de función
// 2 - por medio de una clase 

function Principal({navigation} : any) {

  // que es eso?!
  // JSX - javascript xml 
  return (
    <View style={styles.container}>
      <EjemploClase nombre="Juan" edad="19" />
      <Chucho nombre="El Killer" edad="3" />
      <FlatList 
        data={[
          {nombre: "chucho1", uri: "http://4.bp.blogspot.com/-7R8yr5qhV8Q/UPFlZvJCB4I/AAAAAAAAI7s/f-CYwM5F6k4/s1600/puppy.jpg"}
        ]}
        renderItem={({item}) => {
          return (
            <PerritoRow nombre={item.nombre} uri={item.uri} />
          );
        }}
      />
      <EjemploRequest />
      <FunctionRequest />
      <Button 
        title='CAMBIO DE COMPONENTE'
        onPress={()=>{
          navigation.navigate("EjemploFuncion", {unDato: "hola", otroDato: "adios"});
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

// ejemplo de componente definido en función
function EjemploFuncion({route}: any) {
  console.log(route);
  return (
    <Text>param1: {route?.params.unDato}, param2: {route?.params.otroDato} </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
