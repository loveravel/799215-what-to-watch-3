import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemIndex: 0
      };

      this.handleActiveItemIndex = this.handleActiveItemIndex.bind(this);
    }

    handleActiveItemIndex(index) {
      this.setState({
        activeItemIndex: index
      });
    }

    render() {
      const {activeItemIndex} = this.state;

      return (
        <Component
          {...this.props}
          activeItemIndex={activeItemIndex}
          onItemClick={this.handleActiveItemIndex}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
