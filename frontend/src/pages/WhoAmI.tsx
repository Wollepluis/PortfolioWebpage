import { useEffect, useState } from "react";
import { getContent } from "../services/contentService";

function WhoAmI() {
    const [bio, setBio] = useState("");

    useEffect(() => {
        getContent("bio").then(setBio).catch(console.error);
    }, []);

    return (
        <div>
            <h1>Who am I?</h1>
            <p>{bio}</p>
        </div>
    );
}

export default WhoAmI;
