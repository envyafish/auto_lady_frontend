// api.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL + '/api/v1';

class API {
    static async request(endpoint, method = 'GET', data = null) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            },
        };

        if (data) {
            config.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    static get(endpoint) {
        return this.request(endpoint);
    }

    static post(endpoint, data) {
        return this.request(endpoint, 'POST', data);
    }

    static put(endpoint, data) {
        return this.request(endpoint, 'PUT', data);
    }

    static delete(endpoint) {
        return this.request(endpoint, 'DELETE');
    }
}

export default API;
