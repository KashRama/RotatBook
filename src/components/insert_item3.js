import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css'

function InsertItem3({ shelves, setShelves }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = React.useState('');
    
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }  
  
    const redirectToNewPage = () => {
      // Use the navigate function to redirect to the "insertItem1" page
      setShelves([shelves[0], shelves[1], [...shelves[2], inputValue], shelves[3]])

      navigate("/insertSuccessful")
    }
  
    return (
      <div>
        <label>Enter Item Name:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={redirectToNewPage}>Enter</button>
      </div>
    );
}

export default InsertItem3;