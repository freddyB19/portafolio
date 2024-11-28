const path = "../../../src/main/img/projects"; 

export const list_projects = [
	{
		image: `${path}/chatroom.jpeg`,
		title: 'Chat-Rooms',
		technologies: ['flask', 'socketio'],
		description: `
			Una pequeña aplicación de chat en donde tendras la posibilidad de
			crear espacios (rooms) para interactuar con diferentes usuarios.<br>
			Para esta aplicación se usó <b>Flask</b> y <b>Socket.IO</b> para su desarrollo. 
		`,
		active: true,
		url: 'https://chat-rooms-yt0u.onrender.com',
		github: 'https://github.com/freddyB19/chatroom.git'
	},
	{
		image: `${path}/carrito.jpeg`,
		title: 'Carrito de compras',
		technologies: ['python', 'django', 'postgresql'],
		description: `
			Una aplicación diseñada en <b>Django</b> 
			que te permite simular los carritos 
			de compras de tiendas en línea.
		`,
		active: false,
		url: 'https://carrito-yz9k.onrender.com',
		github: 'https://github.com/freddyB19/carrito',
	},
	{
		image: `${path}/qr.jpeg`,
		title: 'Generador de Codigo QR',
		technologies: ['python', 'flask'],
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
		technologies: ['python', 'flask'],
		description: `
			Esta aplicación está diseñada en <b>Flask</b>
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
		technologies: ['python'],
		description: `
			Esta aplicación está diseñada con el framework de python <b><a href="https://scrapy.org/"  target="_blank">Scrapy</a></b>.
			Forma parte de un tutorial de intrucción sobre el scraping web,
			donde se estrae información desde la <a  target="_blank" href="https://www.cia.gov/readingroom/historical-collections">Cia.gov</a>.
		`,
		active: true,
		url: 'https://web-scrapy-cia.vercel.app/',
		github: 'https://github.com/freddyB19/scrapy-cia',
	},
	{
		image: `${path}/todo_app.jpeg`,
		title: 'Todo App',
		technologies: ['python', 'django', 'postgresql'],
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
		technologies: ['html5', 'css', 'javascript'],
		description: `
			Un sitio web en honor a la biografía de Vincent Van Gogh. 
			Desde su historia, pinturas y el museo que hoy en día le rinde homenaje.
		`,
		active: true,
		url: 'http://vincent-van-gogh.vercel.app/',
		github: 'https://github.com/freddyB19/vincent-van-gogh',
	},


]