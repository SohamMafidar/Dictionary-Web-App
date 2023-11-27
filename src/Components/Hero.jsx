import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function Hero(props) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    //TODO Add a conditional check to see if audio is not empty.
    const audioWord = props.audio === "" ? "" : new Audio(props.audio);

    const handleClick = () => {
        if (audioWord !== "") {
            setIsPlaying((prevState) => {
                const playState = !prevState;
                if (playState) {
                    audioWord.play();
                }
                return playState;
            });
        }
    };
    return (
        <div className="hero">
            <h1>
                {props.word}
            </h1>
            <div className="play-btn">
                {
                    audioWord !== "" && isPlaying ? (<button id="play" onClick={handleClick}><FontAwesomeIcon id='play-svg' icon={faPause} style={{ color: "#b734ac", }} /></button>)
                        : (audioWord !== "" && !isPlaying) ? (
                            <button id="play" onClick={handleClick}><FontAwesomeIcon id='play-svg' icon={faPlay} style={{ color: "#b734ac", }} /></button>
                        ) : (
                            <button id="play" onClick={handleClick}><FontAwesomeIcon id='play-svg' icon={faPlay} style={{ color: "#b734ac", }} /></button>
                        )
                }



            </div>
        </div>
    )
}



export default Hero

