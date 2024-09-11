import { Link } from "react-router-dom";
// 唯一的区别就是 NavLink 存在 active 状态，而 Link 没有。

export default function About() {
    return (
        <div className="about">
            <header>
                <Link to="/">About</Link>
            </header>
        </div>
    );
}
