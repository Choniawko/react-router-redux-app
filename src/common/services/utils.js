import { ajax } from "rxjs/observable/dom/ajax"

const baseHeaders = () => ({
    authorization: "Basic bHVrYXNpa3A6aW1pZW5pbnkxNA==",
    "Content-Type": "application/json"
})

const get = (url, headers) =>
    ajax.get(url, Object.assign({}, baseHeaders(), headers))
const post = (url, body, headers) =>
    ajax.post(url, body, Object.assign({}, baseHeaders(), headers))

const put = (url, body, headers) =>
    ajax.put(url, body, Object.assign({}, baseHeaders(), headers))

const patch = (url, body, headers) =>
    ajax.patch(url, body, Object.assign({}, baseHeaders(), headers))
const remove = (url, headers) =>
    ajax.delete(url, Object.assign({}, baseHeaders(), headers))

export default {
    get,
    post,
    put,
    patch,
    remove
}
