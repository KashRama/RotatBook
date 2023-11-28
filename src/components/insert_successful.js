import React from 'react'
import {Link} from 'react-router-dom';

import '../css/valid.css'

export function InsertSuccessful() {
    return (
        <div id="valid">
            <p className='heading'>Insert Successul! Your item has been stored</p>
            <div>
                <p>
                    <Link to="/InsertID"><button>Insert Another Item</button></Link>
                    <Link to="/Storage"><button>Check Storage</button></Link>
                    <Link to="/"><button>Return Home</button></Link>
                </p>
            </div>
        </div>
    )
}

export function InvalidID() {
    return (
        <div id="valid">
            <p  className='heading'>You entered an invalid ShelfID. Please check again and enter the correct ID.</p>
            <div>
                <p>
                    <Link to="/InsertID"><button>Insert ShelfID</button></Link>
                </p>
            </div>
        </div>
    )
}

const inserting = {InsertSuccessful, InvalidID}
export default inserting;