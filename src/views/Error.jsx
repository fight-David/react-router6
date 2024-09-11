import { Link } from "react-router-dom";
// 唯一的区别就是 NavLink 存在 active 状态，而 Link 没有。
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate = useNavigate()
    return (
        <div className="Error">
            <header>
                <Link to="/">Error</Link>
                &nbsp;
                <Button onClick={() => {
                    navigate('/', { state: "From the Error Page" })
                }}>back</Button>
            </header>
        </div>
    );
}
