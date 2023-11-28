import React, { useState } from 'react';
import Home from './home';
import InsertID from './insert';
import {InsertSuccessful, InvalidID} from './insert_successful';
import InsertItem1 from './insert_item1';
import InsertItem2 from './insert_item2';
import InsertItem3 from './insert_item3';
import InsertItem4 from './insert_item4';
import {Retrieve, RetreivalSuccessful, RetreivalUnsuccessful} from './retrieve';
import Storage from './storage';
import {Shelf1Storage} from './shelf_storage';
import {Shelf2Storage} from './shelf_storage';
import {Shelf3Storage} from './shelf_storage';
import {Shelf4Storage} from './shelf_storage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {
    const location = useLocation();
    const [calib, setCalib] = useState(0)
    const [shelves, setShelves] = useState([['res'], ['kash'], ['vraj'], ['ath']])
    const [itemShelf, setItemShelf] = useState(0)

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home calib={calib} setCalib={setCalib}/>}></Route>
                <Route path='/insertID' element={<InsertID/>}></Route>
                <Route path='/insertItem1' element={<InsertItem1 shelves={shelves} setShelves={setShelves}/>}></Route>
                <Route path='/insertItem2' element={<InsertItem2 shelves={shelves} setShelves={setShelves}/>}></Route>
                <Route path='/insertItem3' element={<InsertItem3 shelves={shelves} setShelves={setShelves}/>}></Route>
                <Route path='/insertItem4' element={<InsertItem4 shelves={shelves} setShelves={setShelves}/>}></Route>
                <Route path='/insertSuccessful' element={<InsertSuccessful/>}></Route>
                <Route path='/invalidID' element={<InvalidID/>}></Route>
                <Route path='/retrieve' element={<Retrieve shelves={shelves} itemShelf={itemShelf} setItemShelf={setItemShelf} calib={calib}/>}></Route>
                <Route path='/retrieval_success' element={<RetreivalSuccessful itemShelf={itemShelf}/>}></Route>
                <Route path='/retrieval_unsuccessful' element={<RetreivalUnsuccessful/>}></Route>
                <Route path='/storage' element={<Storage/>}></Route>
                <Route path='/shelf1storage' element={<Shelf1Storage shelves={shelves[0]}/>}></Route>
                <Route path='/shelf2storage' element={<Shelf2Storage shelves={shelves[1]}/>}></Route>
                <Route path='/shelf3storage' element={<Shelf3Storage shelves={shelves[2]}/>}></Route>
                <Route path='/shelf4storage' element={<Shelf4Storage shelves={shelves[3]}/>}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;