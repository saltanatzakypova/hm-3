import "./App.css";
import Card from "./components2/Card";

const data = [
  {
    title: "Pen",
    price: 20,
    color: "blue",
    date: new Date(2022, 7, 5),
  },
  {
    title: "Paper",
    price: 20,
    color: "blue",
    date: new Date(2020, 3, 14),
  },
  {
    title: "Apple",
    price: 20,
    color: "blue",
    date: new Date(2021, 7, 24),
  },
];
function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card
          title={item.title}
          price={item.price}
          color={item.color}
          date={item.date}
        />
      ))}
    </div>
  );
}
export default App;
