function Data({ area, region, capital, name }) {
  return (
    <div>
      <h2 className='country__name'>{name}</h2>
      <div className='country__facts'>
        <div className='country__fact'>
          <h3 className='country__fact__name'>Region:</h3>
          <span className='country__fact__value'>{region}</span>
        </div>
        <div className='country__fact'>
          <h3 className='country__fact__name'>Capital:</h3>
          <span className='country__fact__value'>{capital}</span>
        </div>
        <div className='country__fact'>
          <h3 className='country__fact__name'>Area:</h3>
          <span className='country__fact__value'>{area} km<sup>2</sup></span>
        </div>
      </div>
    </div>
  );
}

export default Data;
