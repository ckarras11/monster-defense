import { Loop, Stage } from 'react-game-kit';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Game extends React.Component {
    render() {
        return (
            <Loop>
                <Stage style={{ background: '#3a9bdc' }}>
                </Stage>
            </Loop>   
        ); 
    }
}