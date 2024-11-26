import { TechnologiesInfo } from "./technologies_info.mjs"
import { TechnologiesMessage } from "./technologies_message.mjs"

export const Technologies = ({}) => {
	return `
		<div class="row justify-content-center align-items-center mt-5 mb-5">
			<div class="col-12 col-md-4">
				${TechnologiesMessage({})}
			</div>
			<div class="col-12 col-md-8">
				${TechnologiesInfo({})}
			</div>
		</div>
	`;
}