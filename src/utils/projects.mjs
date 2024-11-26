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
            	<h3 class="font-monospace text-center">${project.title}</h3>
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
	<div class="uk-card uk-card-default uk-card-hover">
	    <div class="uk-card-media-top" >
    		<img src="${project.image}" alt="" width="1800">
        </div>
	    <div class="uk-card-body">
	    	<p class="uk-text-center uk-text-bolder">${project.title}</p>

	    	<div class="uk-text-center">
	    		<a class="uk-button uk-button-primary" href="#modal-group-${index}" uk-toggle>Ver más</a>
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
	        <h2 class="uk-modal-title uk-text-center uk-text-capitalize">${project.title}</h2>
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


export const ProjectBootstrap = ({project, index}) => {
	return `
	<div class="card mb-3 p-0 card-hover" style="width: 18rem;">
	  <img src="${project.image}" class="card-img-top w-100 h-100 p-0"alt="..." loading="lazy" style="max-width: 100%;">
	  <div class="card-body">
	   	<h5 class="card-title text-center fw-bold">${project.title}</h5>
	  	<p class="text-center">
        	<a class="btn btn-outline-primary" href="#modal-group-${index}" uk-toggle>
		        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
						<path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"></path>
				</svg>
		        Ver más
		    </a>
        </p>


	  	<div class="row row-cols-auto justify-content-center">
  			${
        		project.technologies.map(technology => 
        			`<div class="col" style="width: 4.5rem;">
        				${technologies[technology]({width: "100%", height: "100%"})}
        			</div>`
        		).join('')
        	}
      		
	      </div>
	  </div>
	</div>
	
	<div id="modal-group-${index}" uk-modal>
	    <div class="uk-modal-dialog uk-modal-body">
	        <button class="uk-modal-close-default" type="button" uk-close></button>
	        <h2 class="uk-modal-title uk-text-center uk-text-capitalize">${project.title}</h2>
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
