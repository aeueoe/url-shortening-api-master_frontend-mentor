import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function ShortLink() {
  const [longUrl, setLongUrl] = useState("");
  const [items, setItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    return savedItems ?? [];
  });

  const handleChange = (e) => {
    setLongUrl(e.target.value);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    const removeItemsOnRefresh = () => {
      localStorage.removeItem("items");
      setItems([]);
    };

    window.addEventListener("beforeunload", removeItemsOnRefresh);

    return () => {
      window.removeEventListener("beforeunload", removeItemsOnRefresh);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (longUrl === "") {
      alert("Please add a link");
      return;
    }
    try {
      const response = await fetch(
        `http://tinyurl.com/api-create.php?url=${longUrl}`
      );
      if (response.ok) {
        const shortUrl = await response.text();
        addItem({ shortUrl, longUrl });
        setLongUrl("");
      } else {
        console.error(
          "Error occurred while shortening URL:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCopyShortLink = (shortLink) => {
    navigator.clipboard.writeText(shortLink);
    alert("Copied to clipboard!");
  };

  return (
    <Container>
      <div className="short">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={handleSubmit}>
              <div className="d-md-flex flex-md-row flex-column">
                <input
                  type="text"
                  className="form-control mb-3 mb-md-0 me-md-3"
                  placeholder="Shorten a link here..."
                  value={longUrl}
                  onChange={handleChange}
                />
                <button className="shorten" type="submit">
                  Shorten!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-8 mx-auto mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.longUrl}</h5>
                  <p className="card-text">{item.shortUrl}</p>
                  <button
                    className="start"
                    onClick={() => handleCopyShortLink(item.shortUrl)}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ShortLink;
