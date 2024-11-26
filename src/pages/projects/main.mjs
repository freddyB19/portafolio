import {list_projects} from "./projects.mjs"
import {ProjectBootstrap} from "../../utils/projects.mjs"


export const Projects = ({}) => {
	return `
		<div id="info-projects" style="margin-top: 4rem;">
			<h2 class="text-center projects">Proyectos</h2>
			<p class="colors"></p>
			<div class="row row-cols-1 row-cols-md-2 mb-3 justify-content-center justify-content-md-around">
				${
					list_projects.map((project, index) => 
						`
						${ProjectBootstrap({project, index})}
						`
					).join('')
				}

			</div>
		</div>
	`
}
