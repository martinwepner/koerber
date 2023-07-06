import axios from "axios"
export const API_CLIENT = axios.create({
	// TODO: as a next step this should be loaded from a config file / env variable
	baseURL: `http://localhost:${3001}`, // for some reason (probably bundling problem) import a const value from the "shared" package doesn't work. so hardcoding 3001 here
})
