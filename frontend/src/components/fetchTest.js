import { useEffect, useState } from 'react';
import { apiGateway } from '../helpers/axios-instance';

export const FetchTest = ({ path = 'db' }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiGateway.get(path).then(({ data }) => { setData(data) }).catch(console.error)
    }, []);

    return <pre>{JSON.stringify(data, null, 1)}</pre>
}
