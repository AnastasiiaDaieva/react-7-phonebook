import PropTypes from 'prop-types';

function Filter({ onChange }) {
  return (
    <label htmlFor="search">
      Find contacts by name:
      <input id="search" type="text" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
