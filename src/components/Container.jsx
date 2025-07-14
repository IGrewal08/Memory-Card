import "/src/styles/Container.css";

export default function Container({ clickFunction, data }) {
  return (
    <div className="container">
      {data.map((item) => (
        <Card
          key={item.hits[0].id}
          tags={item.hits[0].tags}
          URL={item.hits[0].largeImageURL}
          onClick={() => clickFunction(item.hits[0].id)}
        />
      ))}
    </div>
  );
}

function Card({ tags, URL, onClick }) {
  const desc = (tags.slice(0, tags.indexOf(","))).toUpperCase();
  return (
    <div className="card" onClick={onClick}>
      <img src={URL} alt={desc}></img>
      <h5 className="description">{desc}</h5>
    </div>
  );
}
