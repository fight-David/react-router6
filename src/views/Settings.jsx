import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <div className="settings">
            <header>
                <h1>Hello World</h1>
                <Link
                    to={{
                        pathname: "/settings",
                        search: "?sort=date",
                        hash: "#hash"
                    }}
                >
                    设置
                </Link>
            </header>
        </div>
    );
}

