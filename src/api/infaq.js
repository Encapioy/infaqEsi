import axios from "axios";

const url = 'http://donasi-api.test/api/infaq'

export default class infaq {

    // get all
    static async all() {
        const res = await axios.get(url)
        return res.data
    }

    // find
    static async find(id) {
        const res = await axios.get(url + '/' + id)
        return res.data
    }

    // store
    static async store(form) {
        const res = await axios.post(url, form)
        return res.data
    }

    // update
    static async update(form) {
        const res = await axios.post(url, form)
        return res.data
    }

    // destroy
    static async destroy(id) {
        const res = await axios.delete(url + '/' + id)
        return res.data
    }

}