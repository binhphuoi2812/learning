const { useState, useEffect, useCallback } = React;

const initialItems = [
  {
    area: "Development",
    group: "Sales",
    sgroup: "New",
    id: "1104905",
    name: "GOLDEN KNIGHT",
    comp: "100% Gold"
  },
  {
    area: "Development",
    group: "Sales",
    sgroup: "Avengers",
    id: "1207791",
    name: "CAPITAIN AMERICA SHIELD",
    comp: "50% Steel, 50% Vibranium"
  },
  {
    area: "Development",
    group: "Sales",
    sgroup: "Avengers",
    id: "1209362",
    name: "IRON MAN SUIT",
    comp: "100% Iron"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "New",
    id: "1306485",
    name: "METALLIC VEST BURGUNDY",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1308612",
    name: "METALLIC VEST GRENADINE",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1406599",
    name: "METALLIC VEST NUDE",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1508062",
    name: "METALLIC VEST BIC BLUE",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1508435",
    name: "METALLIC VEST BLUE SPACE",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1608938",
    name: "CHAIN SHIRT VERT ACIDE",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1609949",
    name: "CHAIN SHIRT AZTECA",
    comp: "100% Steel"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1610128",
    name: "CHAIN SHIRT GREEN TEA",
    comp: "100% Iron"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1611865",
    name: "CHAIN SHIRT URBAN",
    comp: "100% Adamantium"
  },
  {
    area: "Development",
    group: "Exploration",
    sgroup: "Default",
    id: "1709378",
    name: "CHAIN SHIRT ANGELIM",
    comp: "100% Adamantium"
  }
];

const filterIt = (terms, arr) => {
  if ("" === terms || terms.length < 3) return arr;
  const words = terms.match(/\w+|"[^"]+"/g);
  words.push(terms);
  return arr.filter((a) => {
    const v = Object.values(a);
    const f = JSON.stringify(v).toLowerCase();

    return words.every(val => f.includes(val));
  });
};

const FilteredList = () => {
  const [items, setItems] = useState([]);

  const filterList = useCallback(({target}) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems);
    setItems(updatedList);
  }, []);

  return (
    <div className="filter-list">
      <h2>Material List</h2>
      <input type="text" placeholder="Search" onChange={filterList} />
      <List items={items} />
    </div>
  );
};

var List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <h6>{item.id}</h6>
        <span>{item.name}</span>
      </li>
    ))}
  </ul>
);

ReactDOM.render(<FilteredList />, document.getElementById("search-list"));
