import "./list.css";

const menu = [
  "All",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];

const List = () => {
  return (
    <div className="all">
      <ul>
        {menu.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
