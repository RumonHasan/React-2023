/* eslint-disable */
import { useState } from 'react';
const Pagination = () => {
  const [array, setArray] = useState([
    {
      name: 'rumon',
    },
    {
      name: 'Hinako',
    },
    {
      name: 'Ishwor',
    },
    {
      name: 'Yoi',
    },
    {
      name: 'rumon',
    },
    {
      name: 'She is amazin',
    },
    {
      name: 'Ishwor',
    },
    {
      name: 'Yoi',
    },
    {
      name: 'rumon',
    },
    {
      name: 'Hin',
    },
    {
      name: 'Ishr',
    },
    {
      name: 'Yoi',
    },
    {
      name: 'rumon',
    },
    {
      name: 'Hinako',
    },
    {
      name: 'Ishwor',
    },
    {
      name: 'Yoi',
    },
  ]);
  const [increment, setIncrement] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(increment);
  const [paginatedArray, setPaginatedArray] = useState(
    array.slice(startIndex, endIndex)
  );
  // basic dumb pagination idea for jumping 5 pages at a time
  const nextPage = () => {
    const totalLength = array.length;
    setStartIndex((prevStartIndex) => prevStartIndex + increment);
    if (totalLength - endIndex < increment) {
      setEndIndex((prevEndIndex) => prevEndIndex + (totalLength - endIndex));
    } else {
      setEndIndex((prevEndIndex) => prevEndIndex + increment);
    }
    setPaginatedArray(array.slice(startIndex, endIndex));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ color: 'black' }}>Pagination</h1>
      {paginatedArray.map((singleElement, index) => {
        const { name } = singleElement;
        return (
          <span key={index}>
            {index}.{name}
          </span>
        );
      })}
      <div style={{ display: 'flex' }}>
        <button onClick={() => nextPage()}>Next page</button>
      </div>
    </div>
  );
};

export default Pagination;
