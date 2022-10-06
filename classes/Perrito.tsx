import { useState } from 'react';
import { Button, Text, View, Image } from 'react-native';

export default function Perrito(props: Readonly<{}>){

    // definición de los estados 
    // se hace con hooks
    // hooks son métodos que definieron para extender funcionalidad de 
    // componentes definidos en función

    const[estaFeliz, setEstaFeliz] = useState(false);
    const[cuenta, setCuenta] = useState(0); 

    return (
        <View>
            <Text>WOOF. {props.nombre} {props.edad}</Text>
            <Text>{estaFeliz? "FELIZ :D" : "TRISTE :'("}</Text>
            <Text>Ladridos del día: {cuenta}</Text>
            <Button 
                title="CAMBIAR ESTADO DE ÁNIMO"
                onPress={() => {
                    setEstaFeliz(!estaFeliz);
                }}
            />
            <Button 
                title="WOOF."
                onPress={() => {
                    setCuenta(cuenta + 1);
                }}
            />
        </View>
    );
}


export function PerritoRow(props: Readonly<{}>) {
    return (
        <View>
            <Text>hola me llamo: {props.nombre}</Text>
            <Image 
                source={{uri: props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}