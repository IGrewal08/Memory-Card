export default function Container({ onClick, data }) {
  return (
    <>
      {data.map((item) => {
        <Card
          key={data.id}
          tags={item.tags}
          URL={item.largeImageURL}
          onClick={(e) => onClick(e, data.id)}
        />;
      })}
    </>
  );
}

function Card({ tags, URL }) {
  const desc = tags.slice(0, tags.indexOf(","));
  return (
    <div className="card">
      <img src={URL} alt={desc}></img>
      <h5 className="description">{desc}</h5>
    </div>
  );
}
