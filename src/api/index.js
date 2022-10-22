import axios from "axios"

// const api = axios.create({ baseURL: "http://localhost:8000" })
const api = axios.create({ baseURL: "https://server-dayapp.vercel.app" })

api.interceptors.request.use((req) => {

  if (localStorage.getItem("profile")) {
    const profile = JSON.parse(localStorage.getItem("profile"))

    req.headers.Authorization = `Bearer ${profile.token}`
  }

  return req
})

export const fetchNotes = async () => api.get("/notes")
export const createNote = async (note) => api.post("/notes", note)
export const updateNote = async (id, note) => api.patch(`${"/notes"}/${id}`, note)
export const deleteNote = async (id) => api.delete(`${"/notes"}/${id}`)
export const likeNote = async (id) => api.patch(`${"/notes"}/${id}/likeNote`)


export const login = async (formValues) => api.post("/user/login", formValues)
export const signup = async (formValues) => api.post("/user/signup", formValues)
