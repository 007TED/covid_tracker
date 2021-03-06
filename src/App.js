import React from 'react';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/logo.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async  componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})

    }
    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='corona' />
                <h3>Covid Tracker</h3>
                <em>The Recovered value is a tentative maximum recoveries possible</em>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App;

