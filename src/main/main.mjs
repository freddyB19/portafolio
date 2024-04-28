import { Header } from '../pages/header/main.mjs'
import { Projects } from '../pages/projects/main.mjs'
import { Technologies } from '../pages/technologies/main.mjs'


export const Main = ({}) => {
	const root = document.querySelector("#root");

	root.innerHTML = `
		${Header({})}
		
		${Projects({})}

		${Technologies({})}

	`
}