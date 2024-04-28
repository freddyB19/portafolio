import { Usuario } from "./usuario.mjs"
import { UsarioInfo } from "./usuario_info.mjs"

export const Header = ({}) => {
	return `
		<div class="row justify-content-center align-items-center mb-3">
			<div class="col-12 col-md-4">
				${Usuario({})}
			</div>
			<div class="col-12 col-md-8">
				${UsarioInfo({})}
			</div>
		</div>
	`
}