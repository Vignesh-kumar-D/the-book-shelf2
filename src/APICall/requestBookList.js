const requestBookList = async (searchBy, searchTerm) => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+${searchBy}`
    );
    const data = await res.json();

    return data;
  } catch (error) {}
};

export default requestBookList;
