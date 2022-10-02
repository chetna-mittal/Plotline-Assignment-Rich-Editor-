import React from 'react';
import SlateEditor from './SlateEditor';
import Box from './Box';
import '../styles/mainContainer.css';

const MainContainer = () => {
	return (
		<main className='container'>
			<h4 className='heading'>John Doe Interview</h4>
			<SlateEditor />
			<Box />
		</main>
	);
};

export default MainContainer;
