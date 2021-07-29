module.exports = class Items {

    constructor(items) {
        this._items = items.map((item, index) => {
            return {
                id: index + 1,
                name: item.nombre,
                stuff: item.ingredientes.split(" "),
                price: item.precio
            }
        })
    }
    get items() {
        return this._items;
    }
    set items(val) {
        this._items = val.map((item, index) => {
            return {
                id: index + 1,
                name: item.nombre,
                stuff: item.ingredientes.split(" "),
                price: item.precio
            }
        });
    }
    getItems() {
        return this._items
    }
    findByName(name) {
        let response = this.getItems().filter(i => i.name.toLowerCase().includes(name.toLowerCase()))
        return response.length == 0 ? "No se encontraron resultados" : response
    }

    findById(id) {
        let index = this.getItems().map(o => o.id).indexOf(Number(id))
        return index == -1 ? "No se encontraron resultados" : items[index]
    }
    findByStuff(stuff) {
        let response = this.getItems().filter(i => i.stuff.join(" ").toLowerCase().includes(stuff.toLowerCase()))
        return response.length == 0 ? "No se encontraron resultados" : response
    }

    findByStuffs(stuffs) {
        stuffs = stuffs.split(" ");
        var response = this.getItems().filter(i => {
            let res = true
            stuffs.forEach(stuff => {
                res = res && i.stuff.indexOf(stuff) != -1
            });
            return res
        })
        return response.length == 0 ? "No se encontraron resultados" : response
    }
}

