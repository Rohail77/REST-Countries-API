function Flag({ flag, countryName }) {
  return (
    <div className='country__flag'>
      <img src={flag} alt={`Flag of ${countryName}`} />
    </div>
  );
}

export default Flag;
