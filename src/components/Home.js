import {useContext} from 'react'
import {Context} from '../Context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Card from './Card'
import Search from './Search'
import Option from './Option'

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

export default function Home() {

	const {country,search,filter} = useContext(Context)

	return(
		<>
			<Head>
				<Search />
				<Option />
			</Head>

			<div className="card-wrapper">	
				{country ? country.filter((item) => {
					if(search === ""){
						return item
					}else if(item.name.toLowerCase().includes(search.toLowerCase())){
						return item
					}

				}).filter((item) =>{
					if(filter === "" || filter === "Filter by Region"){
						return item
					}else if(item.region.toLowerCase().includes(filter.toLowerCase())){
						return item
					}

				}).map((item,index) => (
					<div key={item.name.official}>
						<Link to={`/countries-app/${item.name}`} style={{textDecoration:"none"}}>
							<Card 
								flag = {item.flags.svg}
								name={item.name}
								population = {item.population}
								region = {item.region}
								capital = {item.capital}
								id = {index}
							/>
						</Link>
					</div>
				))
				:
				<div>Loading...</div>
				}
			</div>
		</>
	)
}