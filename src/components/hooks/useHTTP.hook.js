import { useState, useCallback } from "react";

const useHTTP = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

        const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {

            setLoading(true)

            try {
                if (body) {
                    body = JSON.stringify(body)
                    headers["Content-Type"] = "application/json"

                }

                const response = await fetch(url, {method, headers, body})

                const data = await response.json()

                if(!response.ok) {
                    throw new Error('Something response error')
                }

                return data

            } catch(e) {
                setError(e.message)
                throw e
            } finally {
                setLoading(false)
            }

            }, [])

        const clearError = useCallback(() => {setError(null)}, [])            
        
        return { loading, request, setLoading, clearError }
}

export default useHTTP