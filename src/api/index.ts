const api = {
  get: async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
  login: async (username: string, password: string) => {
    const res = await fetch("http://127.0.0.1:5031/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return data;
  }
}

export default api;
