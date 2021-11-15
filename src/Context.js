import React,{useState, useEffect, useRef} from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {

	const url = "https://restcountries.com/v2/all"
	let error = ""

	const [search, setSearch] = useState("")
	const [country, setCountry] = useState([])
	const [filter, setFilter] = useState("")
	const [countryIndex, setCountryIndex] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const dropDown = useRef(null)
	

	const handleSearch = (event) => {
		setSearch(event.target.value)
	}

	const toggleDrop = () => {
		setIsOpen(!isOpen)
	}
	
	const selectedFilter = arg => () =>{
		setIsOpen(!isOpen)
		setFilter(arg)
	}

	useEffect(()=>{
		fetch(url)
		.then((resp) => {
			if(!resp.ok){
				throw Error("Unable to fetch Data, Check internet connection!")
			}
			
			return resp.json()
		}
		)
		.then((data) => setCountry(data))
		.catch((err) => error = err)
	},[])

	return(
		<Context.Provider value={{
			dropDown,
			search,
			handleSearch,
			filter,
			isOpen,
			toggleDrop,
			selectedFilter,
			country,
			countryIndex,
			setCountryIndex
		}}>
			{children}
		</Context.Provider>
	)
}

export {
	Context,
	ContextProvider
}