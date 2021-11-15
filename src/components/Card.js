import styled from 'styled-components'

const CardStyle = styled.div`
	width: 270px;
	margin: 0 auto;
	border-radius: 5px;
	overflow: hidden;
	background-color: ${({theme}) => theme.bg};
	color: ${({theme}) => theme.text};
	transition: .5s all ease-in;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.20);


	img {
		width: 100%;
		height: 150px;
		object-fit: cover; 
		object-position: center;
	}

`

const CardInfo = styled.div`
	padding: 1em;
`

const Data = styled.div`
	margin-bottom: 2em;
	margin-top: 1em;

	p{
		font-size: .85rem;
		padding-bottom: 5px;
	}

	p strong {
		font-weight: 600;
	}
`

export default function Card({flag,id,name,population,region,capital}){

	return(
		<CardStyle>
			<img src={flag} alt= {name}/>
			<CardInfo>
				<h4>{name}</h4>
				<Data>
					<p><strong>Population: </strong>{population.toLocaleString()}</p>
					<p><strong>Region: </strong>{region}</p>
					<p><strong>Capital: </strong>{capital}</p>
				</Data>
			</CardInfo>
		</CardStyle>

	)
}