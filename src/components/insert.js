import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css'

function InsertID() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
    <div>
      <label>What is the ShelfID?</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={redirectToNewPage}>Enter</button>
    </div>
  );
}

export default InsertID;