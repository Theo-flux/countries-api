import {useContext, useEffect} from 'react'
import {Context} from '../Context'
import styled from 'styled-components'
import {Link,useParams} from 'react-router-dom'

const Details = styled.div`
	width: 90%;
	margin: 2em auto;
	max-width: 1300px;
	height: auto;
	min-height: 100vh;
	color: ${({theme}) => theme.text};
	transition: .5s all ease-in;

	.card-details {
		display: grid;
		grid-gap: 1em;
	}

	.card-details img {
		margin: 2em 0 0 0;
		width: 100%;
		height: 200px;
	}

	.card-details h2 {
		font-size: 1.5rem;
	}

	.card-details p {
		font-size: .875rem;
		margin-bottom: .8em;
	}

	.border-countries {
		font-weight: 800;
	}

	.neighbours {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}

	@media (min-width: 767px) {
		.border {
			margin-top: 4em;
		}
		
		.card-details {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
		}

		.card-details img {
			width: 45%;
			height: 350px;
		}

		.card-details h2 {
			margin-bottom: .5em;
		}

		.card-side {
			width: 40%;
		}

		.card-row {
			display: flex;
			justify-content: space-between;
		}

	}

`

const Borderlink = styled(Link)`
	font-size: .8rem;
	padding: .3em 1em;
	border-radius: 2px;
	text-decoration: none;
	color: ${({theme}) => theme.text};
	background-color: ${({theme}) => theme.element};
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10);
	transition: .5s all ease-in;
	cursor: pointer;

`

const Styledlink = styled(Link)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-decoration: none;
	color: ${({theme}) => theme.text};
	padding: .4em 0;
	border-radius: 4px;
	width: 90px;
	background-color: ${({theme}) => theme.element};
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10);
	transition: .5s all ease-in;
`

export default function CountryInfo(){

	const {country} = useContext(Context)
	const params = useParams()
	const {countryId} = params

	return(
		<Details>
			<div className="link">
				<Styledlink to ="/countries-app">
					<i className="ri-arrow-left-s-fill"></i> 
					<p>Back</p>
				</Styledlink>
			</div>
			{
				country.filter((item) => {
					if(item.name.toLowerCase() === countryId.toLowerCase()){
						return item
					}
				}).map((item) => (
					<div className="card-details" key="item.cioc">
						<img src={item.flags.svg} alt={item.name} />
						<div className="card-side">
							<h2>{item.name}</h2>
							
							<div className="card-row">
								<div>
									<p><strong>Native Name: </strong>{item.name}</p>
									<p><strong>Population: </strong>{item.population.toLocaleString()}</p>
									<p><strong>Region: </strong>{item.region}</p>
									<p><strong>Sub Region: </strong>{item.subregion}</p>
									<p><strong>Capital: </strong>{item.capital}</p>
								</div>

								<div>
									<p><strong>Top Level Domain: </strong>{item.topLevelDomain}</p>
									<p><strong>Currencies: </strong>{item.currencies[0].name}</p>
									<p><strong>Languages: </strong>{item.languages.map((lang, index) => {
										if(index === item.languages.length-1){
											return(<>{lang.name}</>)
										}else{
											return(<>{lang.name}, </>)
										}
									})}</p>
								</div>
							</div>

							<div className="border">
								{item.borders && <p className="border-countries">Border Countries:</p>}
								<div class="neighbours">
								{item.borders && item.borders.map((neighbour) =>
									(
										<>{country.map((item) => {
											if(neighbour === item.alpha3Code){
												return(<Borderlink to={`/countries-app/${item.name}`}>{item.name} </Borderlink>)
											}
										})}</>
									)
								)}
								</div>
							</div>
						</div>
					</div>
				))
			}
		</Details>
	)
}