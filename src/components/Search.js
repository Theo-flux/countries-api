import {useContext} from 'react'
import styled from 'styled-components'
import {Context} from '../Context'

const Input = styled.div `
	width: 100%;
	max-width: 270px;
	background-color: ${({theme}) => theme.element};
	padding:0 2em;
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10); 
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: .5s all ease-in;


	input {
		padding: 1em 0;
		width: 85%;
		height: 100%;
		border: none;
		background-color: transparent;
		transition: .5s all ease-in;
		font-size: 0.75rem;
		color: ${({theme}) => theme.text};
	}

	i {
		color: ${({theme}) => theme.highlight};
	}

	input:focus {
		outline: none;
	}

`

export default function Search(argument) {
	
	const {handleSearch, search} = useContext(Context)

	return(
		<Input>
			<i className="ri-search-2-line"></i>
			<input
				type="text"
				value={search}
				onChange={handleSearch}
				placeholder="Search for a country..." 
			/>
		</Input>
	)
}