import React, { Component } from "react";
import { MutedDots, Wrapper } from "./styles/StyledLoading";

class Loading extends Component {
  constructor(props) {
    super(props);
    const options = JSON.parse(localStorage.getItem("settings"));
    this.state = {
      darkMode: options.darkMode
    };
  }
  render() {
    return (
      <Wrapper dark={this.state.darkMode}>
        <MutedDots dark={this.state.darkMode}>...</MutedDots>
      </Wrapper>
    );
  }
}

export default Loading;

// const Loading = () => {
//   const options = JSON.parse(localStorage.getItem("settings"));
//   return (
//     <Wrapper dark={options.darkMode}>
//       <MutedDots dark={options.darkMode}>...</MutedDots>
//     </Wrapper>
//   );
// };
