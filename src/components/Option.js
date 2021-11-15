import {useContext, useEffect} from 'react'
import {Context} from '../Context'
import styled from 'styled-components'

const DropdownContainer = styled.div`
	position: relative;
	width: 50%;
	max-width: 180px;
	color: ${({theme}) => theme.text};
	background-color: ${({theme}) => theme.element};
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10); 
	transition: .5s all ease-in;

`

const DropdownHead = styled.div`
	width: 100%;
	display:flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 2em;
	font-size: 0.75rem;
	cursor: pointer;

`
const DropDown = styled.ul`
	position: absolute;
	top: 45px;
	width: 100%;
	color: ${({theme}) => theme.text};
	background-color: ${({theme}) => theme.element};
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10);
	overflow: hidden;	
`
const Item = styled.li `
	list-style: none;
	padding: .5em 2em;
	font-size: 0.75rem;
	cursor: pointer;

	&:nth-child(0){
		padding-top: 0;
	}

	&:hover {
		background-color: ${({theme}) => theme.bg};
	}

`
const continents = ['Filter by Region','Africa','America','Asia','Europe','Oceania']

export default function Option() {

	const {filter,selectedFilter,toggleDrop,isOpen,dropDown} = useContext(Context)

	useEffect(() => {
		if(isOpen){
			dropDown.current.style.transform = "rotate(180deg)"
			
			
		}else {
			dropDown.current.style.transform = "rotate(0)"

			
		} 
		dropDown.current.style.transition= ".3s transform ease-in" 
		
			
	},[isOpen, dropDown])
	
	return(
		<DropdownContainer>
			<DropdownHead onClick={toggleDrop}>
				{filter || "Filter by Region"}
				<i ref={dropDown} className="ri-arrow-down-s-line"></i>
			</DropdownHead>
			{isOpen &&
			<DropDown>
				
				{continents.map((continent, index) => (
					<Item onClick={selectedFilter(continent)} key={index}>{continent}</Item>
				))}
				
			</DropDown>
			}
		</DropdownContainer>
	)
}