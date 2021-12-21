import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const namesOfItems = Object.keys(options);
  return (
    <ul>
      {namesOfItems.map(btnName => {
        return (
          <li key={btnName}>
            <button type="button" onClick={onLeaveFeedback}>
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
