import { Outlet } from "react-router-dom";
import { useState } from 'react'
// 唯一的区别就是 NavLink 存在 active 状态，而 Link 没有。

// 通常父路由管理状态或其他您希望与子路由共享的值
// 您可以创建自己的 上下文提供者，但这种情况非常普遍，因此它内置在 <Outlet /> 中

export default function Message() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState('David');

    return (
        <div className="message">
            Message <br />
            <Outlet context={[count, setCount, user]} />
        </div>
    );
}
