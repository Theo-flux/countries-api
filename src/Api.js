
import {useEffect} from 'react'

const url = "https://restcountries.com/v3.1/all"
let error = ""

const ApiRequest = () => {
	let apiData = ""

	useEffect((url)=>{
		const response = fetch(url)
		if(!response.ok) {
			error = response.statusText
		}else {
			const data = response.json()
			apiData = data 
		}

	},[])

	return {apiData,error}

}

export {ApiRequest}