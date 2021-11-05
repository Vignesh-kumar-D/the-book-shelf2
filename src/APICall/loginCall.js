const loginCall = async (url, body, giveError, getResponse) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (!res.ok) return giveError(data.error.message);

    return getResponse(data);
  } catch (error) {}
};

export default loginCall;
