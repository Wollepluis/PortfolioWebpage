import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5279/api/hello")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Api request failed");
                }

                return response.json();
            })
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
