
class GeneralService {
    constructor (model, service) {
        this.model = model
        this.service = service
    }

    async getItems() {
        try {
            const response = await this.model.find()

            return response
        } catch ( err ) {
            console.error(err)
            throw new Error(`Error attemping to get ${ this.service } from db`)
        }
    }

    async getItemById(id) {
        try {
            const response = await this.model.findById(id).exec()

            return response
        } catch ( err ) {
            console.error(err)
            throw new Error(`Error attemping to get a ${ this.service } from db`)
        }
    }

    async createItem(data) {
        try {
            const pt = new this.model(data)
            const response = await pt.save()

            return response
        } catch ( err ) {
            console.error(err)
            throw new Error(`Error attemping to insert a ${ this.service } into the db`)
        }
    }

    async updateItem(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate({ _id: id }, { ...data })

            return response
        } catch ( err ) {
            console.error(err)
            throw new Error(`Error attemping to update a ${ this.service } into the db`)
        }
    }

    async deleteItem(id) {
        try {
            await this.model.findByIdAndDelete({ _id: id })

            return `${ this.service } REMOVED`
        } catch ( err ) {
            console.error(err)
            throw new Error(`Error attemping to delete a ${ this.service } from db`)
        }
    }
}

export default GeneralService