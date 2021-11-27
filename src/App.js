import "./App.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../public/images", false, /\.(png|jpe?g|svg)$/)
);

function card(source) {
  return (
    <>
      <img src={"images" + source} alt={source} />
    </>
  );
}

function App() {
  let list = [];
  for (const [key, value] of Object.entries(images)) {
    list.push(key);
  }
  return (
    <div className="App">
      <header className="App-header">
        {list.map((item) => {
          return <img src={"images/" + item} alt="yo"></img>;
        })}
      </header>
    </div>
  );
}

export default App;
