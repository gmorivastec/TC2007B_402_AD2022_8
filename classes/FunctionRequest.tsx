
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

// NOTA DE CICLO DE VIDA
// QUÉ METODO ESTAMOS IMPLEMENTANDO AL HACER UN COMPONENTE EN FUNCIÓN?
// - IMPLEMENTAMOS RENDER

export default function FunctionRequest() {

    const[datos, setDatos] = useState([]);

    async function request() {

        var respuesta = await fetch("https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json");
        var json = await respuesta.json();

        console.log(json);

        setDatos([
            {nombre: "chucho1", uri: "http://4.bp.blogspot.com/-7R8yr5qhV8Q/UPFlZvJCB4I/AAAAAAAAI7s/f-CYwM5F6k4/s1600/puppy.jpg"}
          ]);
    }

    // useEffect hook -
    // registramos lógica para ser ejecutada post-render
    // a esta lógica se le llama effect
    // podemos ponerle prerequisitos / detonadores

    useEffect(() => {
        request();
    }, []);

    

    return (
        <View>
        {
            datos.length == 0?
                
                <Text> SI HUBO DATOS! </Text>
            :
                <ActivityIndicator size="large" /> 
        }
        </View>
        
    );   
}