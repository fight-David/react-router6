import { useOutletContext } from "react-router-dom";

// 子级必须使用 useOutletContext() 解构数组。顺序很重要，与道具和对象解构不同。
export default function NewMessage() {
    const [count, setCount, user] = useOutletContext()
    const increment = () => setCount((c) => c + 1);
    return (
        <div className="">
            hi , {user} &nbsp;
            <button onClick={increment}>{count}</button>;
        </div>
    );
}
