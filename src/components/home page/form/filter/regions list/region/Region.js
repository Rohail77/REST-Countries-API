function Region({ region, setRegion, selected }) {
  return (
    <li
      onClick={() => setRegion(region)}
      className={selected ? 'selected' : ''}
    >
      {region}
    </li>
  );
}

export default Region;
