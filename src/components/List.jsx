import { useEffect, useState } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5)); // Adding 5 as an incremental value
    console.log('Updating Items (List Component)');
  }, [getItems]);

  return (
    <div>
      <h3>Generated Items:</h3>
      {items.map(item => <div key={item}>{item}</div>)}
    </div>
  );
};

export default List;