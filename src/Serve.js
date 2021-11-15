import styled, {keyframes} from "styled-components"
import Nav from './components/Nav'
import Home from './components/Home'
import CountryInfo from './components/CountryInfo'
import {Routes, Route} from 'react-router-dom'


const fade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}

`

const MainContainer = styled.main`
	background-color: ${({theme}) => theme.bg};
	transition: .5s all ease-in;
	animation: ${fade} 2s ease-in;
	height: auto;
	min-height: 100vh;

	.card-wrapper {
		width: 90%;
		margin: 0 auto;
		max-width: 1300px;
		display: grid;
	  	grid-template-columns: repeat(auto-fill, minmax(250px, auto));
	  	grid-row-gap: 2em;
	  	grid-column-gap: 2em;
	}
	
`

const Head = styled.div`
	width: 90%;
	margin: 2em auto;
	max-width: 1300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2em;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`
export default function Serve({theme, setTheme}) {
	return(
		<MainContainer>
			<Nav theme={theme} setTheme={setTheme}/>
			
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/:countryId' element={<CountryInfo/>}/>
			</Routes>
			
		</MainContainer>
	)
}