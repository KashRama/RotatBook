import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

import '../css/retrieve.css'
import '../css/retrieve_valid.css'

export function Retrieve({ shelves, itemShelf, setItemShelf, calib }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [shouldNav, setShouldNav] = useState(false)
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    const onKeyUpHandler = (e) => {
        if (e.keyCode === 13) findItem()
      }
  
    const findItem = () => {
        for (let i = 0; i < shelves.length; i++) {
            for (let j = 0; j < shelves[i].length; j++) {
                if (shelves[i][j] === inputValue) {
                    shelves[i].splice(j, 1);
                    setItemShelf(i + 1)
                    setShouldNav(true)
                    return;
                }
            }
        }
        navigate('/retrieval_unsuccessful')
    }

    useEffect(() => {
        if (shouldNav) {
            // console.log(itemShelf)
            setShouldNav(false)
            navigate('/retrieval_success')
            axios.post('https://rotatbook.onrender.com/test', {on: calib, shelfID: itemShelf}).then(_ => {
            }).catch(e => console.log(e))
            // await delay(5000);

        }
    }, [itemShelf, shouldNav, navigate, calib])
  
    return (
      <div id="retrieve">
        <motion.div className="background"
            initial = {{opacity: '0%'}}
            animate = {{opacity: '100%', transition: {duration: 2.2}}}
            exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
        >
            <div className='wrapper'>
                <div className="row">
                    <p className='prompt'>Name of item to retrieve:</p>
                </div>
                <div className="row">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyUp={onKeyUpHandler}
                    />
                    <button onClick={findItem} className="enter">Retrieve</button>
                </div>
            </div>
        </motion.div>
      </div>
    );
}

export function RetreivalSuccessful({itemShelf}) {
    return(
        <div id="retrieve-valid">
            <p className='heading'>Your item was found in shelf {itemShelf} and will be retrieved promptly</p>
            <div>
                <p>
                    <Link to="/InsertID"><button>Insert Another Item</button></Link>
                    <Link to="/Storage"><button>Check Storage</button></Link>
                    <Link to="/"><button>Return Home</button></Link>
                    <Link to="/retrieve"><button>Retrieve another item</button></Link>
                </p>
            </div>
        </div>
        
    );
}

export function RetreivalUnsuccessful() {
    return(
        <div id="retrieve-valid">
            <p className='heading'>Your item was not found in storage. Please try again.</p>
            <div>
                <p>
                    <Link to="/retrieve"><button>Retrieve an item</button></Link>
                    <Link to="/Storage"><button>Check Storage</button></Link>
                </p>
            </div>
        </div>
    );
}

const retrieval = {Retrieve, RetreivalSuccessful, RetreivalUnsuccessful}
export default retrieval;