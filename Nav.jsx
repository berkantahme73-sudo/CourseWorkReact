import { Link } from "react-router-dom"

export function Nav() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="page2">
                <button>Page 2</button>
            </Link>
            <Link to="page3">
                <button>Page 3</button>
            </Link>
            <Link to="signup">
                <button>Sign Up and Login</button>
            </Link>
            <hr />
        </>
    )
}