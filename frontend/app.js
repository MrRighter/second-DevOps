async function loadItems() {
	const list = document.getElementById('items')
	list.innerHTML = '<li>Загрузка...</li>'
	try {
		const res = await fetch('/api/items')
		const items = await res.json()
		list.innerHTML = items.map(i => `<li>${i.id}: ${i.name}</li>`).join('')
	} catch (e) {
		list.innerHTML = '<li style="color:red">Ошибка: ' + e.message + '</li>'
	}
}
loadItems()
