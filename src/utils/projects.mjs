import { technologies } from './technologies.mjs'


const ButtonWebsite = ({url}) => {
	return `
	<a target="_blank" href="${url}" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
			<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"></path>
		</svg>
         Ver sitio
    </a>
	 `
}

const ButtonRepository = ({url}) => {
	return `
	<a target="_blank" href="${url}" class="btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
		</svg>
         Repositorio
    </a>
	`
}

const ProjectActive = ({is_active = false, url = "#"}) => {
	if(is_active)
		return ButtonWebsite({url: url})
	return ``;
}

export const Project = ({project}) => {

	return `
	<div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front" style="background-image: url('${project.image}');">
            </div>
            <div class="flip-card-back">
            	<h3 class="font-monospace">${project.title}</h3>
                <p>
                	${project.description}
                </p>
                <div class="d-grid gap-2">
                	${ProjectActive({is_active:project.active, url: project.url})}
                	${ButtonRepository({url: project.github})}
                </div>

                <ul class="uk-thumbnav" uk-margin>
		        	${
		        		project.technologies.map(technology => 
		        			`<li>${technologies[technology]}</li>`
		        		).join('')
		        	}

		        </ul>
                
                
            </div>
        </div>
    </div>
	`;
}


export const ProjectUlkit = ({project, index}) => {
	return `
	<div class="uk-card uk-card-default">
	    <div class="uk-card-media-top" >
    		<img src="${project.image}" alt="" width="1800">
        </div>
	    <div class="uk-card-body">
	    	<p>${project.title}</p>

	    	<div class="uk-text-center">
	    		<a class="uk-button uk-button-default" href="#modal-group-${index}" uk-toggle>Ver más</a>
	    	</div>

	    </div>
	    <div class="uk-card-footer">
	        <ul class="uk-thumbnav" uk-margin>
	        	${
	        		project.technologies.map(technology => 
	        			`<li>${technologies[technology]}</li>`
	        		).join('')
	        	}

	        </ul>
	    </div>
	</div>

	<div id="modal-group-${index}" uk-modal>
	    <div class="uk-modal-dialog uk-modal-body">
	        <button class="uk-modal-close-default" type="button" uk-close></button>
	        <h2 class="uk-modal-title">${project.title}</h2>
	        <p>
	        	${project.description}
	        </p>
	        <div class="class="uk-child-width-1-2@m" uk-grid>    	
	        	<div>
	        		${ButtonRepository({url: project.github})}
	        	</div>
	        	<div>
	        		${ProjectActive({is_active:project.active, url: project.url})}
	        	</div>
	        </div>
	    </div>
	</div>
	`
}