import React, { Component } from "react";
import { Steps, Hints } from "intro.js-react";




export default class Assistance extends Component {
  constructor(props) {
    super(props);

    let stepsource= this.props["page"];
    
    this.state = {
    //   stepsEnabled: true,
      initialStep: 0,
     steps:stepsource,
      hintsEnabled: true,
      hints: [
        {
          element: ".rating",
          hint: "Rating and Name",
          hintPosition: "middle-left"
        },
                {
          element: ".tags",
          hint: "Tags",
          hintPosition: "middle-middle"
        }
      ],
      showDynamicElement: false
    };
  }

  render() {
    // console.log(this.props["page"]);
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
            {/* <button onClick={this.toggleHints}>Toggle Hints</button> */}
             {/*<button onClick={this.addHint}>Add Hint</button> */}
          </div>
        </div>
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