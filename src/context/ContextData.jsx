import React, { createContext, useEffect, useState } from 'react'

const ContextData = createContext({});

export const ContextProvider = ({ children }) => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("General");
    const [fetchError,setFetchError] = useState(null);


    useEffect(() => {

        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c89a52b9a01b4cabab268b29195f20c5`;
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    setFetchError(response.status);
                }
                const data = await response.json();
                setArticles(data.articles);
                setIsLoading(false);

            }
            catch (err) {
                setIsLoading(false)
                setFetchError(err.message);
            }
        }

        (async () => await fetchData())()

    }, [category])


    return (
        <ContextData.Provider
            value={{

                articles,
                fetchError,
                setArticles,
                isLoading,
                setIsLoading,
                category,
                setCategory
            }
            }>
            {children}
        </ContextData.Provider>
    )
}

export default ContextData