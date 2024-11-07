import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            fetch("/private", {
                headers: { Authorization: token }
            })
            .then(res => res.ok ? res.json() : navigate("/login"));
        }
    }, [navigate]);

    return (
        <div>
            <h1>Private Content</h1>
            <button onClick={() => {
                sessionStorage.removeItem("token");
                navigate("/login");
            }}>Logout</button>
        </div>
    );
};

export default Private;
