import React from 'react'
import './components.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Home({calib, setCalib}) {
    const navigate = useNavigate();
    // const [calib, setCalib] = useState(0)
    const calibrate = () => {
        // eslint-disable-next-line
        if (calib == 0){
            setCalib(1)
            axios.post('http://localhost:4000/test', {on: 1}).then(_ => {
            }).catch(e => console.log(e))
        }
        else{
            setCalib(0)
            axios.post('http://localhost:4000/test', {on: 0}).then(_ => {
            }).catch(e => console.log(e))
        }
    }    

    const checkCalibrationInsert = () => {
        // eslint-disable-next-line
        if(calib == 1){
            navigate('/insertID')
        }
    }
    const checkCalibrationRet = () => {
        // eslint-disable-next-line
        if(calib == 1){
            navigate('/retrieve')
        }
    }
    
    return (
        <div>
            <p>SpinMaster Shelf</p>
            <p1>Please select if you want to insert, retrieve, or check the current items in storage</p1>
            <p2>
                <button onClick={checkCalibrationInsert}>Insert an Item</button>
                <button onClick={checkCalibrationRet}>Retrieve an Item</button>
                <Link to='/storage'><button>Check Current Storage</button></Link>
                <button onClick={calibrate}>Calibrate</button>
            </p2>
        </div>

    )
}

export default Home;
