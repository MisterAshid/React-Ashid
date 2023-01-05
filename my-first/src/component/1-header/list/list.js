import "./list.css";

const menu = [
  "PORTFOLIO",
  "BLOG",
  "CV",
  "STORE",
  "FREELANCE",
  "ABOUT ME",
  "CONTACT",
];

const List = () => {
  return (
    <div className="ul">
      <ul>
        {menu.map((x, index) => (
          <li key={index} className="navList">
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
