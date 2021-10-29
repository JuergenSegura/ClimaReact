import React, { Component } from 'react';

import Navbar from './components/Navbar.js';
import InfoClima from './components/InfoClima.js'
import FormClima from './components/FormClima.js';

import {WEATHER_KEY} from './keys.js'


class App extends Component {

    state = {
        temperatura: '',
        max_temp: '',
        min_temp: '',
        descripccion: '',
        humedad: '',
        velocidad_viento: '',
        ciudad: '',
        pais: '',
        error: null

    }

    getClima = async e => {
        e.preventDefault();

        const {ciudad, pais} = e.target.elements;
        const ciudadValue = ciudad.value;
        const paisValue = pais.value;

        if (ciudadValue&&paisValue) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=${WEATHER_KEY}&units=metric`;
            const respuesta = await fetch(API_URL);
            const data = await respuesta.json();
            
            this.setState({
                temperatura: data.main.temp,
                max_temp: data.main.temp_max,
                min_temp: data.main.temp_min,
                descripccion: data.weather[0].description,
                humedad: data.main.humidity,
                velocidad_viento: data.wind.speed,
                ciudad: data.name,
                pais: data.sys.country,
                error: null
            },);
        } else {
            this.setState({error: 'Por favor ingrese una ciudad y un pais.'})
        }
        
        
        
    }


    render() {
        return(
            <div>
                <Navbar />
                <section className="container p-4 ">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <FormClima getClima={this.getClima} />
                            <InfoClima {...this.state}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;