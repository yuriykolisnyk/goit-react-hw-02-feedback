import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const namesOfItems = Object.keys(options);
  return (
    <ul className={s.list}>
      {namesOfItems.map(btnName => {
        return (
          <li key={btnName}>
            <button type="button" onClick={onLeaveFeedback} className={s.button}>
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
