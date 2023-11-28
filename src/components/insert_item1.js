import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/item.css'

function InsertItem1({ shelves, setShelves }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    // const [numInputs, setNumInputs] = useState(0);
    // const [temp, setTemp] = useState(shelves)

    // const [tempShelves, setTempShelves] = useState([])
    const handleInputChangeName = (event) => {
      setInputValue(event.target.value);
    }  

    // const handleInputChangeQuant = (event) => {
    //     setNumInputs(event.target.value);
    // }
  
    const redirectToNewPage = () => {
      // Use the navigate function to redirect to the "insertItem1" page
    //   for(var i = 0; i < numInputs; i++){
        // setTemp([[...shelves[0], inputValue], ...shelves.slice(1)])
    //   }
    //   setShelves(temp)
    //   console.log(numInputs)
    setShelves([[...shelves[0], inputValue], ...shelves.slice(1)])
      navigate("/insertSuccessful")
    }

    const onKeyUpHandler = (e) => {
        if (e.keyCode === 13) redirectToNewPage()
    }
  
    return (
      <div id="item">
        <motion.div className="background"
            initial = {{opacity: 0}}
            animate = {{opacity: '100%', transition: {duration: 2.2}}}
            exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
        >
            <div className='wrapper'>
                <p className='prompt'>Enter Item Name:</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChangeName}
                    onKeyUp={onKeyUpHandler}
                />
                <button onClick={redirectToNewPage} className='enter'>Enter</button>
            </div>
        </motion.div>
      </div>
    );
}

export default InsertItem1;