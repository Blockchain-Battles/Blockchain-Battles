import Parse from 'parse'

const APPLICATION_ID = process.env.VITE_PARSE_APP_ID as string
const JAVASCRIPT_KEY = process.env.VITE_PARSE_JAVASCRIPT_KEY
const SERVER_URL = process.env.VITE_PARSE_SERVER_URL as string

export const initializeParse = () => {
    Parse.initialize(APPLICATION_ID, JAVASCRIPT_KEY)
    Parse.serverURL = SERVER_URL
}