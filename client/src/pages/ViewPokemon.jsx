import React, {useState, useEffect} from "react";
import NavBar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import API from '../API';
import './style.css';


/**
 * 
 * @returns Component for the view Pokemon page
 */
const ViewPokemon = () => {
    const [body, setBody] = useState([]);

    useEffect( () => {
        API.getPokemon().then((response) => {
            setBody(response.data.pokemon);
        });
    }, []);

    const currentPokemons = body.map((val) => <PokemonCard name={val.name} description={val.description} image={val.image} 
                                                        type1={val.type1} type2={val.type2} moves={val.moves} ></PokemonCard>); 


    // const logPokemon = () => {
    //     console.log(body);
    // };

    return (
        <div>
            <NavBar />

            <div className="pokemon">
                {currentPokemons}
            </div>
        </div>
    );
};

export default ViewPokemon;