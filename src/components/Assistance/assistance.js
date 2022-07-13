import React, { Component } from "react";
import { welcome } from '../Assistance/assist_data';
import { Steps, Hints } from "intro.js-react";



// const welcome1 = [

//             {
//           element: ".navbar-brand",
//           intro: "Hello step"
//         },
//         {
//           element: ".language",
//           intro: "World step"
//         },
//         {
//           element: ".signin",
//           intro: "Dynamic step"
//         }
// ];




export default class Assistance extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   stepsEnabled: true,
      initialStep: 0,
     steps:welcome,
      hintsEnabled: true,
      hints: [
        {
          element: ".hello",
          hint: "Hello hint",
          hintPosition: "middle-right"
        }
      ],
      showDynamicElement: false
    };
  }

  render() {
    const {
      stepsEnabled,
      steps,
      initialStep,
      hintsEnabled,
      hints
    } = this.state;

    return (
      <div className="tourguide">
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
          onBeforeChange={this.onBeforeChange}
          ref={steps => (this.steps = steps)}
        />
        <Hints enabled={hintsEnabled} hints={hints} />

        <div className="controls">
          <div>
            <button className="btn btn-outline-secondary btn-lg m-3 rounded-pill" onClick={this.toggleSteps}>View Demo</button>
            {/* <button onClick={this.addStep}>Add Step</button> */}
          </div>
          <div>
            {/* <button onClick={this.toggleHints}>Toggle Hints</button>
            <button onClick={this.addHint}>Add Hint</button> */}
          </div>
        </div>

        {/* <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It's alive!</h1> */}


        {/* {this.state.showDynamicElement && (
          <div>
            <br />
            <h1 className="dynamic">I'm dynamic!</h1>
          </div>
        )} */}
      </div>
    );
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  toggleSteps = () => {
    this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  addStep = () => {
    const newStep = {
      element: ".alive",
      intro: "Alive step"
    };

    this.setState(prevState => ({ steps: [...prevState.steps, newStep] }));
  };

  toggleHints = () => {
    this.setState(prevState => ({ hintsEnabled: !prevState.hintsEnabled }));
  };

  addHint = () => {
    const newHint = {
      element: ".alive",
      hint: "Alive hint",
      hintPosition: "middle-right"
    };

    this.setState(prevState => ({ hints: [...prevState.hints, newHint] }));
  };

  onBeforeChange = nextStepIndex => {
    console.log(nextStepIndex);
    if (nextStepIndex === 1) {
      this.setState(
        () => ({ showDynamicElement: true }),
        () => {
          this.steps.updateStepElement(2);
        }
      );
    }
  };
}