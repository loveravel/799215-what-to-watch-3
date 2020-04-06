import React from "react";
import {convertToCamelCase} from "../../utils.js";
import {CommentLength, MAX_RATING} from "../../constants.js";

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        rating: 0,
        isCommentValid: false,
        isRatingValid: false,
        isFormValid: false,
        isFormError: false,
        isDisabled: false,
        formMessage: ``
      };

      this._timer = null;
      this._handleUserInput = this._handleUserInput.bind(this);
      this._handleToggleFieldDisable = this._handleToggleFieldDisable.bind(this);
      this._resetForm = this._resetForm.bind(this);
      this._handleSendFormSuccess = this._handleSendFormSuccess.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }

    _handleSendFormSuccess() {
      this.setState(
          {formMessage: `Your review has been published`},
          () => {
            this._timer = setTimeout(() => {
              this.setState({
                formMessage: ``
              });
            }, 1500);
          }
      );
      this._resetForm();
    }

    _handleToggleFieldDisable(status) {
      this.setState({isDisabled: status});
    }

    _handleUserInput(evt) {
      const {name, value} = evt.target;
      this.setState(
          {[convertToCamelCase(name)]: value},
          () => this._validateFields(convertToCamelCase(name), value));
    }

    _resetForm() {
      this.setState({
        reviewText: ``,
        rating: 0,
        isCommentValid: false,
        isRatingValid: false,
        isFormValid: false,
        isFormError: false,
        isDisabled: false
      });
    }

    _validateFields(name, value) {
      let {
        isCommentValid,
        isRatingValid
      } = this.state;

      if (name === `reviewText`) {
        isCommentValid = value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;
      }

      if (name === `rating`) {
        isRatingValid = value > 0 && value <= MAX_RATING;
      }

      this.setState({
        isCommentValid,
        isRatingValid,
        isFormValid: isCommentValid && isRatingValid
      });
    }

    render() {
      const {
        reviewText,
        rating,
        isCommentValid,
        isRatingValid,
        isFormValid,
        isDisabled,
        formMessage
      } = this.state;

      return <Component
        {...this.props}
        comment={reviewText}
        formMessage={formMessage}
        isCommentValid={isCommentValid}
        rating={parseInt(rating, 10)}
        isRatingValid={isRatingValid}
        isDisabled={isDisabled}
        isFormValid={isFormValid}
        onChange={this._handleUserInput}
        onDisable={this._handleToggleFieldDisable}
        onSendFormSuccess={this._handleSendFormSuccess}
      />;
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
