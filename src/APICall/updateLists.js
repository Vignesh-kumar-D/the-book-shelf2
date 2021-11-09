const updateLists = async (method, userId, body, list) => {
  const res = await fetch(
    `https://the-book-shelf-84b91-default-rtdb.firebaseio.com/users/${userId}/${list}/${
      body.key ? body.key : ""
    }.json`,
    {
      method: method,
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(body),
    }
  );
  const data = await res.json();

  if (method === "POST") return data.name;
};
export default updateLists;
