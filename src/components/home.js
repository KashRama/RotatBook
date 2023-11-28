import React from 'react'
import '../css/home.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function Home({calib, setCalib}) {
    const navigate = useNavigate();
    // const [calib, setCalib] = useState(0)
    const calibrate = () => {
        // eslint-disable-next-line
        if (calib == 0){
            setCalib(1)
            console.log(calib)
            axios.post('https://rotatbook.onrender.com/test', {on: 1, shelfID: 1}).then(_ => {
            }).catch(e => console.log(e))
        }
        else{
            setCalib(0)
            console.log(calib)
            axios.post('https://rotatbook.onrender.com/test', {on: 0, shelfID: 1}).then(_ => {
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

    const navStorage = () => {
        navigate('/storage')
    }
    
    return (
        <div id="home">
            <motion.div className='background'
                initial = {{opacity: 0}}
                animate = {{opacity: '100%', transition: {duration: 2.2}}}
                exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
            >
            <div className='wrapper'>
                <p className='title'>SpinMaster Shelf</p>
                <div className='spacer'>
                    <span className="line"></span>
                </div>
                <div className='content'>
                    <div className='button-wrapper'>
                        <button onClick={checkCalibrationInsert} className='buttons' disabled={calib === 0}>Insert an Item</button>
                        <button onClick={checkCalibrationRet} className='buttons' disabled={calib === 0}>Retrieve an Item</button>
                        <button onClick={navStorage} className='buttons'>Check Current Storage</button>
                        <button onClick={calibrate} className='buttons'>Calibrate</button>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>

    )
}

export default Home;
