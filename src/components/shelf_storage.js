import React from 'react'
import {Link} from 'react-router-dom';

import '../css/shelf.css'

export function Shelf1Storage({shelves}) {
    return (
        <div id="shelf">
            <p className='heading'>Shelf 1 Items</p>
            <div className="item-list">
                {shelves.map(paragraph => <p>{paragraph}</p>)}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    );
}

export function Shelf2Storage({shelves}) {
    return (
        <div id="shelf">
            <p className='heading'>Shelf 2 Items</p>
            <div className="item-list">
                {shelves.map(paragraph => <p>{paragraph}</p>)}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export function Shelf3Storage({shelves}) {
    return (
        <div id="shelf">
            <p className='heading'>Shelf 3 Items</p>
            <div className="item-list">
                {shelves.map(paragraph => <p>{paragraph}</p>)}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export function Shelf4Storage({shelves}) {
    return (
        <div id="shelf">
            <p className='heading'>Shelf 4 Items</p>
            <div className="item-list">
                {shelves.map(paragraph => <p>{paragraph}</p>)}
            </div>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

const shelves = {Shelf1Storage, Shelf2Storage, Shelf3Storage, Shelf4Storage};

export default shelves;