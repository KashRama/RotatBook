import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/insert.css'

function InsertID() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onKeyUpHandler = (e) => {
    if (e.keyCode === 13) redirectToNewPage()
  }

  const redirectToNewPage = () => {
    // Use the navigate function to redirect to the "insertItem1" page
    // eslint-disable-next-line
    if(inputValue == 1){
        navigate('/insertItem1');
    }
    // eslint-disable-next-line
    else if (inputValue == 2){
        navigate('/insertItem2');
    }
    // eslint-disable-next-line
    else if (inputValue == 3){
        navigate('/insertItem3');
    }
    // eslint-disable-next-line
    else if (inputValue == 4){
        navigate('/insertItem4');
    }
    else{
        navigate('/invalidID')
    }
  }

  return (
    <div id="insert">
        <motion.div className="background"
            initial = {{opacity: 0}}
            animate = {{opacity: '100%', transition: {duration: 2.2}}}
            exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
        >
            <div className='wrapper'>
                <p className='prompt'>What is the ShelfID?</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={onKeyUpHandler}
                />
                <button onClick={redirectToNewPage} className='enter'>Enter</button>
            </div>
        </motion.div>
    </div>
  );
}

export default InsertID;