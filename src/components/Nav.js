
import styled from 'styled-components'



const Navbar = styled.nav`
	color: ${({theme}) => theme.text};
	background-color: ${({theme}) => theme.element};
	padding: 2em 0;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.10); 
	transition: .5s all ease-in;
	
	.container {
		width: 90%;
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.toggler {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90px;
		font-size: 0.85rem;
		cursor: pointer;
	}


	.toggler p {
		font-weight: 600;
	}

`
export default function Nav({theme, setTheme}){

	const toggleTheme = () => {
		let themeChange
		if(theme === "light") {
			themeChange = "dark"
		}else if(theme === "dark") {
			themeChange = "light"
		}
		setTheme(themeChange)
	}

	return(
		<Navbar>
			<div className="container">
				<h4>Where in the world?</h4>
				<div className="toggler" onClick={toggleTheme}>
					<i className={theme === "light" ? "ri-moon-fill" : "ri-moon-line" }></i>
					{theme === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
				</div>
			</div>
		</Navbar>
	)
}