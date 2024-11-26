import { technologies } from "../../utils/technologies.mjs"

export const TechnologiesInfo = ({}) => {
	return `
	<div class="mt-5">
		<div class="d-flex justify-content-center gap-3">
			${technologies.javascript({})}
			${technologies.css({})}
			${technologies.html5({})}
		</div>
		<div class="d-flex justify-content-center alig-items-center gap-3">
			${technologies.python({})}
			${technologies.django({})}
			${technologies.flask({})}
			${technologies.fastapi({})}
		</div>
		<div class="d-flex justify-content-center gap-3">
			${technologies.redis({})}
			${technologies.postgresql({})}
		</div>
	</div>
	`;
}