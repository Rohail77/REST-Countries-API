function Filter({ region, setRegion, selected }) {
  const handleKeyPress = event => {
    if (event.keyCode === 13 || event.key === 'ENTER') setRegion(region);
  };
  return (
    <li
      onClick={() => setRegion(region)}
      className={selected ? 'selected' : ''}
      role='button'
      tabIndex='0'
      onKeyUp={handleKeyPress}
    >
      {region}
    </li>
  );
}

export default Filter;
