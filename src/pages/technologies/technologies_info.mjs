import { technologies } from "../../utils/technologies.mjs"

export const TechnologiesInfo = ({}) => {
	return `
	<div class="d-flex justify-content-center gap-4 mb-2">
		${technologies.javascript({})}
		${technologies.css({})}
		${technologies.html5({})}
	</div>
	<div class="d-flex justify-content-center alig-items-center gap-4 mb-2">
		${technologies.python({})}
		${technologies.django({})}
		${technologies.flask({})}
		${technologies.fastapi({})}
	</div>
	<div class="d-flex justify-content-center gap-4 mb-2">
		${technologies.redis({})}
		${technologies.postgresql({})}
	</div>
	`;
}