import {list_projects} from "./projects.mjs"
import {Project} from "../../utils/projects.mjs"


export const Projects = ({}) => {
	return `
		<div id="info-projects" style="margin-top: 4rem;">
			<h2 class="text-center projects">Proyectos</h2>
			<p class="colors"></p>
			<div class="row row-cols-1 row-cols-md-3 g-4 mb-3 justify-content-center">
				${
					list_projects.map(project => 
						`
						${Project({project})}
						`
					).join('')}

			</div>
		</div>
	`
}
