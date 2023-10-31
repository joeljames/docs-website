import styled from '@emotion/styled';
import range from 'lodash/range';
import PropTypes from 'prop-types';

const RatingContainer = styled.fieldset`
  border: 0;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin: 0 0 22px;
  padding: 0;

  & > div {
    background: #d1d4d4;
    border-radius: 4px;
    color: var(--erno-black);
    cursor: pointer;
    display: grid;
    height: 2.625rem;
    place-items: center;
    position: relative;
    width: 2.25rem;
  }
  & > div:hover,
  & > div:focus-within {
    background: #e1e4e4;
  }

  & > div > input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  & > div > label {
    font-size: 1rem;
  }
`;

const NumberRater = ({ onSelect }) => (
  <RatingContainer>
    {range(1, 11).map((n) => (
      <div>
        <input
          id={`number-rater-${n}`}
          name="number-rater"
          onChange={() => onSelect(n)}
          type="radio"
          value={n}
        />
        <label for={`number-rater-${n}`}>{n}</label>
      </div>
    ))}
  </RatingContainer>
);

NumberRater.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default NumberRater;
