import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResults = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    return (
        <DataContext.Provider
            value={{
                search,
                setSearch,
                posts,
                setPosts,
                isLoading,
                fetchError,
                searchResults,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
