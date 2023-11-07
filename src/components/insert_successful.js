import React from 'react'
import './components.css'
import {Link} from 'react-router-dom';

export function InsertSuccessful() {
    return (
        <div>
            <p>Insert Successul! Your item has been stored</p>
            <p1>
                <Link to="/InsertID"><button>Insert Another Item</button></Link>
                <Link to="/Storage"><button>Check Storage</button></Link>
                <Link to="/"><button>Return Home</button></Link>
            </p1>
        </div>
    )
}

export function InvalidID() {
    return (
        <div>
            <p>You entered an invalid ShelfID. Please check again and enter the correct ID.</p>
            <Link to="/InsertID"><button>Insert ShelfID</button></Link>
        </div>
    )
}

const inserting = {InsertSuccessful, InvalidID}
export default inserting;