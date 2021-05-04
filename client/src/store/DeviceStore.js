import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
        ]
        this._devices = [
            {id: 1, name: "12 pro", price: 34567, raiting: 0, img: "http://localhost:5000/76849c15-60de-4330-a729-10dbe82af735.jpg"},
            {id: 2, name: "a515", price: 12345, raiting: 0, img: "http://localhost:5000/4617a866-2cf2-487c-8195-90d92b216ac2.jpg"},
            {id: 3, name: "note pro", price: 4321, raiting: 0, img: "http://localhost:5000/dc4707c9-688b-43b3-91b4-c59628e826f7.jpg"},
            {id: 4, name: "Atlant", price: 4569, raiting: 0, img: "http://localhost:5000/eb001b77-c048-4ccc-938f-376e5de3186c.jpg"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}