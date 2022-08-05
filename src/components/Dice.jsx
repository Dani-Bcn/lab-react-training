import React ,{useState} from 'react';
import DiceEmpty from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

const Dice = () => {

    const [dices,setDices] =useState(
        [
            DiceEmpty,
            Dice1,
            Dice2,
            Dice3,
            Dice4,
            Dice5,
            Dice6,
        ]
    )
    let numRandom = Math.floor(Math.random() * (7 - 1) +1)
    const [randomDice, setRandomDice] = useState(dices[numRandom])
    const throwDice =()=>{
        setRandomDice(dices[0])
        setTimeout(()=>finalThrowDice(),1000)
    }
    const finalThrowDice=()=>{
        numRandom = Math.floor(Math.random() * (7 - 1) +1)
        setRandomDice(dices[numRandom])
    }
    return (
        <div className="cards">
            <img src={randomDice}alt="" />
            <button onClick={()=>throwDice()}> Throw dice !</button>
        </div>
    );
    }
export default Dice;
