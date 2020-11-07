const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
	// Inserir dados na tabela
	
	// await saveOrphanage(db, {
	// 	lat: "-27.222633",
	// 	lng: "-49.6455874",
	// 	name: "Lar das Meninas",
	// 	about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
	// 	whatsapp: "52463514",
	// 	images: [
	// 		"https://images.unsplash.com/photo-1531129630896-1744cab0cafd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
	// 		"https://images.unsplash.com/photo-1530083100317-1b635da9af95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
	// 	].toString(),

	// 	instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
	// 	opening_hours: "Horário de visitas Das 18h até 8h",
	// 	open_on_weekends: "0"
	// })

	// consultar dados da tabela
	const selectedOrphanages = await db.all("SELECT * FROM orphanages")
	console.log(selectedOrphanages)

	// consultar somente 1 orphanato, pelo id

	// const orphanage = await db.all('SELECT * FROM orphanages WHERE ID = "1"')
	// console.log(orphanage)


	// detetar dado da tabela

	// console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
	// console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})