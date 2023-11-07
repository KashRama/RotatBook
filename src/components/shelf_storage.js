import React from 'react'
import './components.css'
import {Link} from 'react-router-dom';

export function Shelf1Storage({shelves}) {
    console.log(shelves)
    return (
        <div>
            <p>Shelf 1 Items</p>
            {shelves.map(paragraph => <p>{paragraph}</p>)}
            <Link to='/'><button>Home</button></Link>
        </div>
    );
}

export function Shelf2Storage({shelves}) {
    return (
        <div>
            <p>Shelf 2 Items</p>
            {shelves.map(paragraph => <p>{paragraph}</p>)}
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export function Shelf3Storage({shelves}) {
    return (
        <div>
            <p>Shelf 3 Items</p>
            {shelves.map(paragraph => <p>{paragraph}</p>)}
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export function Shelf4Storage({shelves}) {
    return (
        <div>
            <p>Shelf 4 Items</p>
            {shelves.map(paragraph => <p>{paragraph}</p>)}
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

const shelves = {Shelf1Storage, Shelf2Storage, Shelf3Storage, Shelf4Storage};

export default shelves;