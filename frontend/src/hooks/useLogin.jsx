import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState( null)
    const [loading, setLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async(email, password)  => {
        setLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            // update the auth Content
            dispatch({type: 'LOGIN', payload: json})
    
            setLoading(false)
            setError("Success")
        }

    }

    return {login, loading, error}
}