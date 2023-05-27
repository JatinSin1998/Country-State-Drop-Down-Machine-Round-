import { country } from "../data/data.js";
import { city } from "../data/data.js";
import { state } from "../data/data.js";



// Fetch The Country  Data

export async function fetchCountry(req, res) {
    try {
        res.json(country)
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch The State  Data

export async function fetchState(req, res) {
    try {
        const { country_id } = req.params;
        // console.log(req.params.country_id);
        const states = state.filter(st=> st.country_id === country_id)
        console.log(states);
        if (states.length > 0) {
            res.json(states);
          } else {
            res.status(404).json({ message: 'No cities found' });
          }
        
        
    } catch (error) {
      console.log(error);
    }
  }
  
   // Fetch The City  Data

   export async function fetchCity(req, res) {
    try {
        const { state_id } = req.params;
        // console.log(req.params.state_id);
        const cities = city.filter(ct=> ct.state_id === state_id)
       
        if (cities.length > 0) {
            res.json(cities);
          } else {
            res.status(404).json({ message: 'No cities found' });
          }
    } catch (error) {
      console.log(error);
    }
  }