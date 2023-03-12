// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxiosFetch = (dataURL) => {
//     const [data, setData] = useState([]);
//     const [fetchError, setFetchError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         let isMounted = true;
//         const source = axios.CancelToken.source();

//         const fetchData = async (url) => {
//             setIsLoading(true);
//             try {
//                 const response = await axios.get(url, {
//                     cancelToken: source.token,
//                 });
//                 if (isMounted) {
//                     setData(response.data);
//                     setFetchError(null);
//                 }
//             } catch (error) {
//                 if (isMounted) {
//                     setFetchError(error.message);
//                     setData([]);
//                 }
//             } finally {
//                 isMounted && setTimeout(() => setIsLoading(false), 2000);
//             }
//         };
//         fetchData(dataURL);

//         const cleanUp = () => {
//             console.log("cleanup function");
//             isMounted = false;
//             source.cancel();
//         };

//         return cleanUp;
//     }, [dataURL]);

//     return { data, fetchError, isLoading };
// };

// export default useAxiosFetch;

import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log("useAxiosFetch - outside useEffect");

    useEffect(() => {
        console.log("useAxiosFetch - inside useEffect");

        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);

            try {
                const response = await axios.get(url, {
                    cancelToken: source.token,
                });

                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                setFetchError(error.message);
                setIsLoading(false);
            } finally {
                isMounted && setIsLoading(false);
            }
        };
        fetchData(dataUrl);

        const cleanUp = () => {
            console.log("  Cleanup...axios");
            isMounted = false;
            source.cancel();
        };

        return cleanUp;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
};

export default useAxiosFetch;

// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";

// const useAxiosFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     console.log("useAxiosFetch - outside useEffect");

//     const fetchData = useCallback(() => {
//         console.log("useAxiosFetch - inside useCallback");
//         axios
//             .get(url)
//             .then((response) => {
//                 setData(response.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => setError(error));
//     }, [url]);

//     useEffect(() => {
//         console.log("useAxiosFetch - inside useEffect");
//         fetchData();
//     }, [fetchData]);

//     return [data, isLoading, error];
// };

// export default useAxiosFetch;
