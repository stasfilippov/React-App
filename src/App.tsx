import React, {useState} from 'react';
import './App.css';
// import {Accordion} from "./components/Accordion/Accordion";
import { OnOff } from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
// import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
// import {Rating} from './components/Rating/Rating';
// import {UncontrolledRating} from './components/UncotrolledRating/UncontrolledRating';

export type valueType = 0| 1 | 2 | 3 | 4 | 5


function App() {

	// let [ratingValue, setRatingValue] = useState<valueType>(0)

	// let [collapsedValue, setCollapsedValue] = useState<boolean>(false);

	// const changeCollapsed = () => {
	// 	setCollapsedValue(!collapsedValue)
	// }
	let [isOn, setIsOn] = useState<boolean>(false)

	console.log('App rendering')
	return (
		<div className='App'>
			{/*<UncontrolledAccordion titleValue={'--Uncontrolled accordion--'}/>*/}
			{/*<Accordion titleValue={'--Controlled accordion--'} isCollapsed={changeCollapsed} collapsed={collapsedValue}/>*/}
			<OnOff isOn={isOn} isOnFn = {setIsOn}/>
			<UncontrolledOnOff/>
			{/*<Rating value={ratingValue} onClick = {setRatingValue}/>*/}
			{/*<UncontrolledRating/>*/}
		</div>
	);
}

export default App;
