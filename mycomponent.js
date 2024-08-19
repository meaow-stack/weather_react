import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'animate.css';
import Select from 'react-select';
import axios from 'axios';

// Hardcoded array of Indian cities
const indianCities = [
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Ahmedabad', value: 'Ahmedabad' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Kolkata', value: 'Kolkata' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Jaipur', value: 'Jaipur' },
    { label: 'Lucknow', value: 'Lucknow' },
    { label: 'Kanpur', value: 'Kanpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Visakhapatnam', value: 'Visakhapatnam' },
    { label: 'Indore', value: 'Indore' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Bhopal', value: 'Bhopal' },
    { label: 'Patna', value: 'Patna' },
    { label: 'Vadodara', value: 'Vadodara' },
    { label: 'Ghaziabad', value: 'Ghaziabad' },
    { label: 'Ludhiana', value: 'Ludhiana' },
    { label: 'Agra', value: 'Agra' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Faridabad', value: 'Faridabad' },
    { label: 'Meerut', value: 'Meerut' },
    { label: 'Rajkot', value: 'Rajkot' },
    { label: 'Kalyan', value: 'Kalyan' },
    { label: 'Vasai-Virar', value: 'Vasai-Virar' },
    { label: 'Varanasi', value: 'Varanasi' },
    { label: 'Srinagar', value: 'Srinagar' },
    { label: 'Aurangabad', value: 'Aurangabad' },
    { label: 'Dhanbad', value: 'Dhanbad' },
    { label: 'Amritsar', value: 'Amritsar' },
    { label: 'Navi Mumbai', value: 'Navi Mumbai' },
    { label: 'Allahabad', value: 'Allahabad' },
    { label: 'Ranchi', value: 'Ranchi' },
    { label: 'Howrah', value: 'Howrah' },
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Jabalpur', value: 'Jabalpur' },
    { label: 'Gwalior', value: 'Gwalior' },
    { label: 'Vijayawada', value: 'Vijayawada' },
    { label: 'Jodhpur', value: 'Jodhpur' },
    { label: 'Madurai', value: 'Madurai' },
    { label: 'Raipur', value: 'Raipur' },
    { label: 'Kota', value: 'Kota' },
    { label: 'Guwahati', value: 'Guwahati' },
    { label: 'Chandigarh', value: 'Chandigarh' },
    { label: 'Solapur', value: 'Solapur' },
    { label: 'Hubballi', value: 'Hubballi' },
    { label: 'Mysore', value: 'Mysore' },
    { label: 'Tiruchirappalli', value: 'Tiruchirappalli' },
    { label: 'Bareilly', value: 'Bareilly' },
    { label: 'Aligarh', value: 'Aligarh' },
    { label: 'Moradabad', value: 'Moradabad' },
    { label: 'Gurgaon', value: 'Gurgaon' },
    { label: 'Jalandhar', value: 'Jalandhar' },
    { label: 'Tirunelveli', value: 'Tirunelveli' },
    { label: 'Bhiwandi', value: 'Bhiwandi' },
    { label: 'Saharanpur', value: 'Saharanpur' },
    { label: 'Guntur', value: 'Guntur' },
    { label: 'Amravati', value: 'Amravati' },
    { label: 'Bikaner', value: 'Bikaner' },
    { label: 'Noida', value: 'Noida' },
    { label: 'Jamshedpur', value: 'Jamshedpur' },
    { label: 'Bhilai', value: 'Bhilai' },
    { label: 'Cuttack', value: 'Cuttack' },
    { label: 'Firozabad', value: 'Firozabad' },
    { label: 'Kochi', value: 'Kochi' },
    { label: 'Bhavnagar', value: 'Bhavnagar' },
    { label: 'Dehradun', value: 'Dehradun' },
    { label: 'Durgapur', value: 'Durgapur' },
    { label: 'Asansol', value: 'Asansol' },
    { label: 'Nanded', value: 'Nanded' },
    { label: 'Kolhapur', value: 'Kolhapur' },
    { label: 'Ajmer', value: 'Ajmer' },
    { label: 'Gulbarga', value: 'Gulbarga' },
    { label: 'Jamnagar', value: 'Jamnagar' },
    { label: 'Ujjain', value: 'Ujjain' },
    { label: 'Loni', value: 'Loni' },
    { label: 'Siliguri', value: 'Siliguri' },
    { label: 'Jhansi', value: 'Jhansi' },
    { label: 'Ulhasnagar', value: 'Ulhasnagar' },
    { label: 'Nellore', value: 'Nellore' },
    { label: 'Udaipur', value: 'Udaipur' },
    { label: 'Bardhaman', value: 'Bardhaman' },
    { label: 'Karnal', value: 'Karnal' },
    { label: 'Gaya', value: 'Gaya' },
    { label: 'Shivamogga', value: 'Shivamogga' },
    { label: 'Mangalore', value: 'Mangalore' },
    { label: 'Erode', value: 'Erode' },
    { label: 'Belgaum', value: 'Belgaum' },
    { label: 'Ambattur', value: 'Ambattur' },
    { label: 'Tirupati', value: 'Tirupati' },
    { label: 'Malegaon', value: 'Malegaon' },
    { label: 'Gorakhpur', value: 'Gorakhpur' },
    { label: 'Jalgaon', value: 'Jalgaon' },
    { label: 'Rourkela', value: 'Rourkela' },
    { label: 'Kakinada', value: 'Kakinada' },
    { label: 'Davanagere', value: 'Davanagere' },
    { label: 'Kozhikode', value: 'Kozhikode' },
    { label: 'Akola', value: 'Akola' },
    { label: 'Tumkur', value: 'Tumkur' },
    { label: 'Panipat', value: 'Panipat' },
    { label: 'Ballari', value: 'Ballari' },
    { label: 'Patiala', value: 'Patiala' },
    { label: 'Agartala', value: 'Agartala' },
    { label: 'Bhagalpur', value: 'Bhagalpur' },
    { label: 'Latur', value: 'Latur' },
    { label: 'Dhule', value: 'Dhule' },
    { label: 'Rohtak', value: 'Rohtak' },
    { label: 'Korba', value: 'Korba' },
    { label: 'Bhilwara', value: 'Bhilwara' },
    { label: 'Nizamabad', value: 'Nizamabad' },
    { label: 'Bhatpara', value: 'Bhatpara' },
    { label: 'Purnia', value: 'Purnia' },
    { label: 'Satna', value: 'Satna' },
    { label: 'Farrukhabad', value: 'Farrukhabad' },
    { label: 'Ambarnath', value: 'Ambarnath' },
    { label: 'Bhiwani', value: 'Bhiwani' },
    { label: 'Jind', value: 'Jind' },
    { label: 'Katihar', value: 'Katihar' },
    { label: 'Madanapalle', value: 'Madanapalle' },
    { label: 'Budaun', value: 'Budaun' },
    { label: 'Gadag', value: 'Gadag' },
    { label: 'Nandurbar', value: 'Nandurbar' },
    { label: 'Chittoor', value: 'Chittoor' },
    { label: 'Porbandar', value: 'Porbandar' },
    { label: 'Anantapur', value: 'Anantapur' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Bangalore Rural', value: 'Bangalore Rural' },
    { label: 'Dharwad', value: 'Dharwad' },
    { label: 'Mysuru', value: 'Mysuru' },
    { label: 'Belagavi', value: 'Belagavi' },
    { label: 'Bijapur', value: 'Bijapur' },
    { label: 'Bellary', value: 'Bellary' },
    { label: 'Gadag Betageri', value: 'Gadag Betageri' },
    { label: 'Kolar', value: 'Kolar' },
    { label: 'Chikkamagaluru', value: 'Chikkamagaluru' },
    { label: 'Raichur', value: 'Raichur' },
    { label: 'Hassan', value: 'Hassan' },
    { label: 'Shivamogga', value: 'Shivamogga' },
    { label: 'Davangere', value: 'Davangere' },
    { label: 'Bagalkote', value: 'Bagalkote' },
    { label: 'Tumakuru', value: 'Tumakuru' },
    { label: 'Mandya', value: 'Mandya' },
    { label: 'Udupi', value: 'Udupi' },
    { label: 'Yadgir', value: 'Yadgir' },
    { label: 'Haveri', value: 'Haveri' },
    { label: 'Chikkaballapur', value: 'Chikkaballapur' },
    { label: 'Ramgarh', value: 'Ramgarh' },
    { label: 'Lohardaga', value: 'Lohardaga' },
    { label: 'Simdega', value: 'Simdega' },
    { label: 'Pakur', value: 'Pakur' },
    { label: 'West Singhbhum', value: 'West Singhbhum' },
    { label: 'Sahibganj', value: 'Sahibganj' },
    { label: 'East Singhbhum', value: 'East Singhbhum' },
    { label: 'Dumka', value: 'Dumka' },
    { label: 'Dhanbad', value: 'Dhanbad' },
    { label: 'Chatra', value: 'Chatra' },
    { label: 'Godda', value: 'Godda' },
    { label: 'Palamu', value: 'Palamu' },
    { label: 'Giridih', value: 'Giridih' },
    { label: 'Jamtara', value: 'Jamtara' },
    { label: 'Garhwa', value: 'Garhwa' },
    { label: 'Latehar', value: 'Latehar' },
    { label: 'Hazaribagh', value: 'Hazaribagh' },
    { label: 'Bokaro', value: 'Bokaro' },
    { label: 'Ranchi', value: 'Ranchi' },
    { label: 'Seraikela-Kharsawan', value: 'Seraikela-Kharsawan' },
    { label: 'Koderma', value: 'Koderma' },
    { label: 'Deoghar', value: 'Deoghar' },
    { label: 'Khunti', value: 'Khunti' },
    { label: 'Gumla', value: 'Gumla' },
    { label: 'Dhanbad', value: 'Dhanbad' },
    { label: 'Bhiwandi', value: 'Bhiwandi' },
    { label: 'Navi Mumbai', value: 'Navi Mumbai' },
    { label: 'Pimpri-Chinchwad', value: 'Pimpri-Chinchwad' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Kalyan-Dombivli', value: 'Kalyan-Dombivli' },
    { label: 'Vasai-Virar', value: 'Vasai-Virar' },
    { label: 'Aurangabad', value: 'Aurangabad' },
    { label: 'Solapur', value: 'Solapur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Amravati', value: 'Amravati' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Bhiwandi', value: 'Bhiwandi' },
    { label: 'Kolhapur', value: 'Kolhapur' },
    { label: 'Sangli', value: 'Sangli' },
    { label: 'Jalgaon', value: 'Jalgaon' },
    { label: 'Akola', value: 'Akola' },
    { label: 'Nanded', value: 'Nanded' },
    { label: 'Latur', value: 'Latur' },
    { label: 'Ahmednagar', value: 'Ahmednagar' },
    { label: 'Dhule', value: 'Dhule' },
    { label: 'Ratnagiri', value: 'Ratnagiri' },
    { label: 'Palghar', value: 'Palghar' },
    { label: 'Parbhani', value: 'Parbhani' },
    { label: 'Bhandara', value: 'Bhandara' },
    { label: 'Yavatmal', value: 'Yavatmal' },
    { label: 'Wardha', value: 'Wardha' },
    { label: 'Beed', value: 'Beed' },
    { label: 'Gondia', value: 'Gondia' },
    { label: 'Chandrapur', value: 'Chandrapur' },
    { label: 'Hingoli', value: 'Hingoli' },
    { label: 'Amravati', value: 'Amravati' },
    { label: 'Buldhana', value: 'Buldhana' },
    { label: 'Washim', value: 'Washim' },
    { label: 'Osmanabad', value: 'Osmanabad' },
    { label: 'Raigarh', value: 'Raigarh' },
    { label: 'Sindhudurg', value: 'Sindhudurg' },
    { label: 'Satara', value: 'Satara' },
    { label: 'Sangli', value: 'Sangli' },
    { label: 'Jalna', value: 'Jalna' },
    { label: 'Solapur', value: 'Solapur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Gadchiroli', value: 'Gadchiroli' },
    { label: 'Mumbai Suburban', value: 'Mumbai Suburban' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Thane', value: 'Thane' },
    { label: 'Nashik', value: 'Nashik' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Nagpur', value: 'Nagpur' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Kharagpur', value: 'Kharagpur' },
    { label: 'Malda', value: 'Malda' },
    { label: 'Jalpaiguri', value: 'Jalpaiguri' },
    { label: 'Kharagpur', value: 'Kharagpur' },
    { label: 'Cooch Behar', value: 'Cooch Behar' },
    { label: 'Alipurduar', value: 'Alipurduar' },
    { label: 'Bardhaman', value: 'Bardhaman' },
    { label: 'Murshidabad', value: 'Murshidabad' },
    { label: 'Haldia', value: 'Haldia' },
    { label: 'Midnapore', value: 'Midnapore' },
    { label: 'Raiganj', value: 'Raiganj' },
    { label: 'Bankura', value: 'Bankura' },
    { label: 'Medinipur', value: 'Medinipur' },
    { label: 'Howrah', value: 'Howrah' },
    { label: 'Siliguri', value: 'Siliguri' },

].sort();

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null); // Store the selected city object
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cityOptions, setCityOptions] = useState([]); // Store city options for select

    // Filter city options based on user input
    const fetchCities = (inputValue) => {
        if (!inputValue) return;

        const filteredCities = indianCities.filter(city =>
            city.label.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        setCityOptions(filteredCities);
    };

    // Fetch weather data based on selected city
    const getData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=934392d6158ac1fdb9e0ca337d0eb1ab&units=metric`);
            setWeather(response.data);
            setError(null);
        } catch (err) {
            setError('City not found. Please try again with a valid city.');
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission to get weather data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            getData();
        } else {
            setError('Please select a city.');
        }
    };

    // Handle user input in the select field
    const handleInputChange = (inputValue) => {
        fetchCities(inputValue);
    };

    // Handle city selection from the dropdown
    const handleChange = (selectedOption) => {
        setCity(selectedOption);
        setWeather(null); // Clear weather data when a new city is selected
        setError(null);
    };

    // Handle closing the weather card
    const handleClose = () => {
        setWeather(null);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card text-bg-info mb-1">
                    <h1 className="text-center">Get Your Weather</h1>
                    <form onSubmit={handleSubmit} className="mb-3">
                        <div className="form-group">

                            <label className='d-flex justify-content-center' htmlFor="city"><b>City</b></label>
                            <span className='d-flex justify-content-center md-textarea-auto animate__heartBeat container-fluid small'>
                                <Select className='flex'
                                    id="city"
                                    options={cityOptions}
                                    onInputChange={handleInputChange}
                                    onChange={handleChange}
                                    placeholder="Enter A City Name"
                                    isClearable
                                />
                            </span>
                        </div>
                        <span className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary mt-2">Get your Weather</button>
                        </span>
                    </form>
                    <div className="bodyy">
                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                {error && <div className="alert alert-dark" role="alert">{error}</div>}
                                {weather && (
                                    <div className="card animate__animated animate__rubberBand animate__flash">
                                        <div className="card-body">
                                            <button type="button" className="btn btn-close" aria-label="Close" onClick={handleClose}></button>
                                            <h5 className="card-title">{weather.name}</h5>
                                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                                alt={weather.weather[0].description} className="img-thumbnail" />
                                            <p className="card-text">Temperature: {weather.main.temp}°C</p>
                                            <p className="card-text">Weather: {weather.weather[0].description}</p>
                                            <p className="card-text">Humidity: {weather.main.humidity}%</p>
                                            <p className="card-text">Wind Speed: {weather.wind.speed} m/s</p>
                                            <p className="card-text">Pressure: {weather.main.pressure} hPa</p>
                                            {weather.rain && <p className="card-text">Precipitation: {weather.rain['1h']} mm (last hour)</p>}
                                            {weather.snow && <p className="card-text">Snow: {weather.snow['1h']} mm (last hour)</p>}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
