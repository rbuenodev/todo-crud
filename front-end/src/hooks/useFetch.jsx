import { useEffect, useState } from "react"

export const useFetch = () => {

    const [data, setData] = useState([]);
    const [postData, setPostData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [updateIdData, setUpdateIdData] = useState(null);
    const [removeData, setRemoveData] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const postTodo = (input) => {
        setPostData(input);
    }

    useEffect(() => {
        const config = ({
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(postData),
        });

        const url = `${process.env.REACT_APP_BASE_URL}/todo`;
        const httpRequest = async () => {
            setLoading(true);
            const res = await fetch(url, config);
            const json = await res.json();
            setCallFetch(json);
            setLoading(false);
        }
        httpRequest();

    }, [postData]);


    const deleteTodo = (id) => {
        setRemoveData(id);
    }

    useEffect(() => {
        const config = ({
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        const url = `${process.env.REACT_APP_BASE_URL}/todo/${removeData}`;
        const httpRequest = async () => {
            setLoading(true);
            const res = await fetch(url, config);
            const json = await res.json();
            setCallFetch(json);
            setLoading(false);
        }

        httpRequest();
    }, [removeData]);

    const updateTodo = (id, input) => {
        setUpdateData(input);
        setUpdateIdData(id);
    }

    useEffect(() => {

        const config = ({
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData)
        });

        const url = `${process.env.REACT_APP_BASE_URL}/todo/${updateIdData}`;
        const httpRequest = async () => {
            setLoading(true);
            const res = await fetch(url, config);
            const json = await res.json();
            setCallFetch(json);
            setLoading(false);
        }
        httpRequest();

    }, [updateData]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_BASE_URL}/todo`;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError("Failed to load data");
            }
            setLoading(false);
        }
        fetchData();
    }, [callFetch]);

    return { data, postTodo, updateTodo, deleteTodo, error, loading };
}