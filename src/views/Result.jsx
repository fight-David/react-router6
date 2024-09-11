import { useSearchParams } from 'react-router-dom'
// useSearchParams Hook，它是基于 URLSearchParams 进行的封装

// URLSearchParams 内置于所有浏览器（IE 除外）中，并提供了处理查询字符串的实用方法
// const queryString = "?q=react&src=typed_query&f=live";
// const sp = new URLSearchParams(queryString);
// sp.has("q"); // true

export default function Results() {
    const [searchParams, setSearchParams] = useSearchParams();

    const user = searchParams.get('user')

    const updateOrder = (newParams) => {
        setSearchParams(newParams)
    }
    return (
        <div>
            params :{user}
            <button onClick={() => updateOrder({ age: '12' })}>updateOrder</button>;
        </div>
    )
}
