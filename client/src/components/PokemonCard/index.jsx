import React, {useEffect, useRef} from 'react';
import Move from '../Move';
import CanvasDraw from 'react-canvas-draw';
import './style.css';

const PokemonCard = (props) => {

    /* Color object to display different colors for each type */
    const colors = {
        Normal: "#555555",
        Fire: "#ff00ff",
        Water: "#0000ff",
        Grass: "#00ff00",
        Electric: "#ffff00",
        Psychic: "#ff00ff",
        Ice: "#99ccff",
        Dragon: "#ff9933",
        Dark: "#cc0099",
        Fairy: "#ff99cc",
        Fighting: "#cc3300",
        Flying: "#66ccff",
        Posion: "#cc99ff",
        Ground: "#cc7400",
        Rock: "666699",
        Bug: "#339933",
        Ghost: "#cccccc",
        Steel: "#999999"
    };

    /* Changes font color based on the pokemon type */
    const getStyle = (type) => {
        if (type == null) { return {}; }
        return { color: colors[type] };
    }

    const movesList = props.moves.map((move, key) => {
        return <Move key={key} type={move.type} name={move.name} power={move.power} />
    });

    //  /* Indicate that the current pokemon doesn't have a move */
    //  const noMoves = () => {
    //     return <tbody><tr>This Pokemon has no moves :(</tr></tbody>;
    // }

    //  /* Displays pokemonMoves or noMoves, depending on whether the pokemon's moves are empty */
    //  let movesSection = () => {
    //     return props.moves.length === 0 ? noMoves() : pokemonMoves;
    // }


    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <CanvasDraw
                    hideGrid={true}
                    disabled={true}
                    hideInterface={true}
                    saveData={props.image}
                />
                <div className="pokemoncard-data-container">
                    <p className="pokemoncard-name">{props.name}</p>
                    <p className="pokemoncard-description">{props.description}</p>
                    <p className="pokemoncard-types">
                        <span className="pokemon-type-1" style={getStyle(props.type1)}>{props.type1}</span>
                        <span className="pokemon-type-2" style={getStyle(props.type2)}>{props.type2}</span>
                    </p>
                    <p className="pokemoncard-bold">Moves</p>
                    <table className="moves-table">
                        <tbody>
                            {movesList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


export default PokemonCard;
