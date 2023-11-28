import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function InsertItem2({ shelves, setShelves }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = React.useState('');
    
  
    const handleInputChangeName = (event) => {
      setInputValue(event.target.value);
    }  
  
    const redirectToNewPage = () => {
      // Use the navigate function to redirect to the "insertItem1" page
      setShelves([shelves[0], [...shelves[1], inputValue], ...shelves.slice(2)])

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

export default InsertItem2;