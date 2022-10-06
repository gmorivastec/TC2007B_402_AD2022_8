
import { Component, ErrorInfo } from 'react';
import { Button, Text, View } from 'react-native';

export class EjemploClase extends Component {

    // 2 CONCEPTOS IMPORTANTES EN COMPONENTES DE REACT
    // 1 - props (properties) - valores que se reciben del exterior para usarse en componente
    // SIMILAR a parámetros de constructor

    // 2 - states (estados) - atributos internos del componente 
    // valores que se utilizan en la funcionalidad interna
    // SIMILAR a una variable de instancia / propiedad / atributo

    /* PARTE 1
    ***** MONTAJE / MOUNTING *****
    */

    // primer método que se ejecuta es el constructor
    constructor(props: Readonly<{}>){
        super(props);

        // sólo aquí utiliza la asignación directa
        this.state = {cuenta: 0, nombre: props.nombre};

        console.log("CONSTRUCTOR");
    }

    // único método obligatorio
    // similar al build de flutter
    render() {
        console.log("RENDER");
        return(
            <View>
                <Text>Mi nombre es: {this.state.nombre} y tengo {this.props.edad} años</Text>
                <Text>número de clicks: {this.state.cuenta}</Text>
                <Button 
                    title="INCREMENTAR CLICKS"
                    onPress={() => {

                        // 2 opciones
                        // (state)
                        // (state, props)
                        this.setState((state) => {
                            return {cuenta: this.state.cuenta + 1};
                        });
                    }}
                />
            </View>
        ); 
    }

    // último método del montaje
    // si usan web aquí los elementos ya están en DOM
    componentDidMount(): void {
        console.log("EL COMPONENTE FUE MONTADO");
    }

    /* PARTE 2
    ***** ACTUALIZACIÓN / UPDATE *****
    */

    // método que se invoca al haber cambios en props o states 
    // ... (al rato los vemos)
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log("SHOULD COMPONENT UPDATE");
        return true;
    }

    // una vez actualizado se ejecuta este método
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");       
    }

    /* PARTE 3
    ***** DESMONTAJE / UNMOUNT *****
    */

    // se ejecuta al desmontar / quitar componente de vista
    // utilizar para cerrar recursos / higiene general de la lógica
    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }

    // BONUS

    // invocado cuando existe algún error en la jerarquía de componentes
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("COMPONENT DID CATCH");
    }
}