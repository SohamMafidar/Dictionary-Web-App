import React from 'react'
import Hero from './Hero';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassEmpty } from '@fortawesome/free-solid-svg-icons';

function Container(props) {
    //* If there is data coming from API, display this screen
    if (props.data.length !== 0) {
        const data = props.data;
        const word = data.og;
        const audio = data.audio;
        const source = data.source;
        const text = data.text;

        const container = data.map((item) => {
            return (
                <div className="container">
                    <h3>{item.partOfSpeech}</h3>
                    <div className="card">
                        <h4>
                            Meaning
                        </h4>
                        <ul>{
                            item.definitions.map((meaning) => {
                                return (
                                    <li>
                                        {meaning}
                                    </li>
                                )
                            })
                        }

                        </ul>
                    </div>

                </div>
            )
        })

        return (
            <section>
                <Hero word={word} audio={audio} />
                <div className='pronounciation-text-div'>
                    <p id='pronounciation-text'>{text} </p>
                </div>
                {container}
                <footer>
                    <h4>Source</h4> <span>{source}</span>
                </footer>
            </section>
        );
    }

    //* If there is no data then show this screen
    else {
        return (
            <div className="alt-container">
                <h1>Wow such empty</h1>
                <FontAwesomeIcon icon={faMartiniGlassEmpty} size='2xl' id='empty-icon' />
            </div>
        )
    }

}

export default Container