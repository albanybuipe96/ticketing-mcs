import axios from 'axios'

export default ({ req }) => {
    if (typeof window === 'undefined') {
        // Server

        return axios.create({
            baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local',
            headers: req.headers
        })
    } else {
        // Browser
        return axios.create({
            baseURL: '/'
        })
    }
}