
import { useParams } from "react-router-dom"

export default function MessageDetail() {
    let { id } = useParams()
    return (
        <div className="message-detail">
            <h3>{id} message-detail</h3>
        </div>
    );
}
