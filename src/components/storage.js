import React from 'react'
import './components.css'
import {Link} from 'react-router-dom';

function Storage() {
    return (
        <div>
            <p>Which shelf would you like to check the storage of?</p>
            <Link to='/shelf1storage'>
                <button>Shelf 1</button>
            </Link>
            <Link to='/shelf2storage'>
                <button>Shelf 2</button>
            </Link>
            <Link to='/shelf3storage'>
                <button>Shelf 3</button>
            </Link>
            <Link to='/shelf4storage'>
                <button>Shelf 4</button>
            </Link>
            <Link to='/'>
                <button>Return Home</button>
            </Link>
        </div>
    )
}

export default Storage;