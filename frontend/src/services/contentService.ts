import { API_URL } from "../config/api";

export async function getContent(name: string): Promise<string> {
    const response = await fetch(`${API_URL}/content/${name}`);

    if (!response.ok) {
        throw new Error("Error: Failed to fetch text");
    }

    return await response.text();
}
