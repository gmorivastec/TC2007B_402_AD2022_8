import { Component } from "react";
import { View, Text } from "react-native";

export default class EjemploRequest extends Component {


    // típico caso para código asíncrono es un request
    async request() {

        var respuesta = await fetch("https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json");
        var json = await respuesta.json();

        console.log(json);
        console.log(json[1]);

        this.setState((state) => {
            return {modelo: json[1]['modelo']};
        });
    }

    constructor(props: any){
        super(props);
        this.request();
        this.state = {modelo: ""};
    }

    render() {

        console.log("RENDER EN EJEMPLO REQUEST");

        return (
            <View>
                <Text>HOLA HICE UN REQUEST: {this.state.modelo}</Text>
            </View>
        );
    }
}