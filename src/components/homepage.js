function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../public/images", false, /\.(png|jpe?g|svg)$/)
);

function card(source) {
  //         get rid of .png then replace the - with a space
  let name = source.slice(0, -4).replace(/-/g, " ");
  return (
    <>
      <div className="card">
        <img src={"images/" + source} alt={source} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default function Homepage() {
  let list = [];
  for (const [key, value] of Object.entries(images)) {
    list.push(key);
  }
  return (
    <>
      {list.map((item) => {
        return card(item);
      })}
    </>
  );
}
