import React, { useState, useEffect } from 'react';
import './components.css'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';


export function Retrieve({ shelves, itemShelf, setItemShelf }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [shouldNav, setShouldNav] = useState(false)
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
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
            axios.post('https://rotatbook.onrender.com/test', {shelfID: itemShelf}).then(_ => {
            }).catch(e => console.log(e))
        }
    }, [itemShelf, shouldNav, navigate])
  
    return (
      <div>
        <label>What is the name of the item you want to retrieve?</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={findItem}>Retrieve</button>
      </div>
    );
}

export function RetreivalSuccessful({itemShelf}) {
    return(
        <div>
            <p>Your item was found in shelf {itemShelf} and will be retrieved promptly</p>
            <Link to="/InsertID"><button>Insert Another Item</button></Link>
            <Link to="/Storage"><button>Check Storage</button></Link>
            <Link to="/"><button>Return Home</button></Link>
            <Link to="/retrieve"><button>Retrieve another item</button></Link>
        </div>
    );
}

export function RetreivalUnsuccessful() {
    return(
        <div>
            <p>Your item was not found in storage. Please try again.</p>
            <Link to="/retrieve"><button>Retrieve an item</button></Link>
            <Link to="/Storage"><button>Check Storage</button></Link>
        </div>
    );
}

const retrieval = {Retrieve, RetreivalSuccessful, RetreivalUnsuccessful}
export default retrieval;