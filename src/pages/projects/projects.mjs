const path = "../../../src/main/img/projects"; 

export const list_projects = [
	{
		image: `${path}/carrito.jpeg`,
		title: 'Carrito de compras',
		description: `
			Una aplicación diseñada en <b>Django</b> 
			que te permite simular los carritos 
			de compras de tiendas en línea.
		`,
		active: true,
		url: 'https://carrito-yz9k.onrender.com',
		github: 'https://github.com/freddyB19/carrito',
	},
	{
		image: `${path}/qr.jpeg`,
		title: 'Generador de Codigo QR',
		description: `
			Este generador de QR está diseñado
			 en <b>Flask</b> y te permite obtener 
			 un código QR a partir 
			 de una url.
		`,
		active: true,
		url: 'https://genqr-flask.onrender.com',
		github: 'https://github.com/freddyB19/genqr',
	},
	{
		image: `${path}/app_pdf.jpeg`,
		title: 'Aplicación de PDF',
		description: `
			Esta aplificación está diseñada en <b>Flask</b>
			 y te permite realizar ciertas acciones 
			con archivos pdf, como extraer texto, imagenes entre otras cosas.
		`,
		active: true,
		url: 'https://pdfapp-qs52.onrender.com',
		github: 'https://github.com/freddyB19/pdfapp',
	},
	{
		image: `${path}/scraping.jpeg`,
		title: 'Scraping web',
		description: `
			Esta aplificación está diseñada con el framework de python <b>Scrapy</b>
			Forma parte de un tutorial de intrucción sobre el scraping web.
		`,
		active: true,
		url: 'https://web-scrapy-cia.vercel.app/',
		github: 'https://github.com/freddyB19/scrapy-cia',
	},
	{
		image: `${path}/todo_app.jpeg`,
		title: 'Todo App',
		description: `
			Una aplicación diseñada en <b>Django</b> y <b>Django Rest Framework</b>
			para gestionar todo tipo de tareas.`,
		active: false,
		url: '',
		github: 'https://github.com/freddyB19/todo-app',
	},
	{
		image: `${path}/vincent.jpeg`,
		title: 'Vincent Van Gogh',
		description: `
			Un sitio web en honor a la biografía de Vincent Van Gogh. 
			Desde su historia, pinturas y el museo que hoy en día le rinde homenaje.
		`,
		active: true,
		url: 'http://vincent-van-gogh.vercel.app/',
		github: 'https://github.com/freddyB19/vincent-van-gogh',
	},


]