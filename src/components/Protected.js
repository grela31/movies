import { useNavigate } from "react-router-dom";

export default function Protected({children}) {
    const userId = sessionStorage.getItem('UserId');
    const navigate = useNavigate();

    console.log({userId})
    if (userId) {
        return children;
    }

    navigate('/login');
}