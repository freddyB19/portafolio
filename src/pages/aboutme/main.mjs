import { AboutmeMessage } from "./aboutme_message.mjs"
import { AboutmeInfo } from "./aboutme_info.mjs"



export const Aboutme = ({}) => {
	return `
		<div class="row justify-content-center align-items-center mt-5 mb-3">
			<div class="col-12 col-md-4">
				${AboutmeMessage({})}
			</div>

			<div class="col-12 col-md-8">
				${AboutmeInfo({})}
			</div>
		</div>
	`
}

