import React from "react";
import drumQ from "../static/audio/drums/African and Eastern Percussion/african-pe-hi.wav";
import drumW from "../static/audio/drums/African and Eastern Percussion/bendy.wav";
import drumE from "../static/audio/drums/African and Eastern Percussion/gungru5.wav";
import drumA from "../static/audio/drums/Crashes/normcrash.wav";
import drumS from "../static/audio/drums/Hats/707-ohh.wav";
import drumD from "../static/audio/drums/Kicks/808-kick-fat-n-low.wav";
import drumZ from "../static/audio/drums/Snares/2ghostsds.wav";
import drumX from "../static/audio/drums/Toms/ambient-tom-1.wav";
import drumC from "../static/audio/drums/Voice/bass.wav";

let qKey = new Audio(drumQ);
let wKey = new Audio(drumW);
let eKey = new Audio(drumE);
let aKey = new Audio(drumA);
let sKey = new Audio(drumS);
let dKey = new Audio(drumD);
let zKey = new Audio(drumZ);
let xKey = new Audio(drumX);
let cKey = new Audio(drumC);

class DrumMachine extends React.Component {
  state = { key: "_" };

  handleKeyPress = e => {
    switch (e.keyCode) {
      case 81:
        this.handleQ();
        break;
      case 87:
        this.handleW();
        break;
      case 69:
        this.handleE();
        break;
      case 65:
        this.handleA();
        break;
      case 83:
        this.handleS();
        break;
      case 68:
        this.handleD();
        break;
      case 90:
        this.handleZ();
        break;
      case 88:
        this.handleX();
        break;
      case 67:
        this.handleC();
        break;
      default:
        break;
    }
  };

  handleQ = () => {
    document.getElementById("drum-q").className = "drum-pad--active";
    this.setState({
      key: "Q"
    });
    if (qKey.paused) {
      qKey.play();
    } else {
      qKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-q").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleW = () => {
    document.getElementById("drum-w").className = "drum-pad--active";
    this.setState({
      key: "W"
    });
    if (wKey.paused) {
      wKey.play();
    } else {
      wKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-w").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleE = () => {
    document.getElementById("drum-e").className = "drum-pad--active";
    this.setState({
      key: "E"
    });
    if (eKey.paused) {
      eKey.play();
    } else {
      eKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-e").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleA = () => {
    document.getElementById("drum-a").className = "drum-pad--active";
    this.setState({
      key: "A"
    });
    if (aKey.paused) {
      aKey.play();
    } else {
      aKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-a").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleS = () => {
    document.getElementById("drum-s").className = "drum-pad--active";
    this.setState({
      key: "S"
    });
    if (sKey.paused) {
      sKey.play();
    } else {
      sKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-s").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleD = () => {
    document.getElementById("drum-d").className = "drum-pad--active";
    this.setState({
      key: "D"
    });
    if (dKey.paused) {
      dKey.play();
    } else {
      dKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-d").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleZ = () => {
    document.getElementById("drum-z").className = "drum-pad--active";
    this.setState({
      key: "Z"
    });
    if (zKey.paused) {
      zKey.play();
    } else {
      zKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-z").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleX = () => {
    document.getElementById("drum-x").className = "drum-pad--active";
    this.setState({
      key: "X"
    });
    if (xKey.paused) {
      xKey.play();
    } else {
      xKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-x").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };
  handleC = () => {
    document.getElementById("drum-c").className = "drum-pad--active";
    this.setState({
      key: "C"
    });
    if (cKey.paused) {
      cKey.play();
    } else {
      cKey.currentTime = 0;
    }
    setTimeout(() => {
      document.getElementById("drum-c").className = "drum-pad";
      this.setState({
        key: "_"
      });
    }, 100);
  };

  render() {
    return (
      <div tabIndex="0" id="drum-machine" onKeyDown={this.handleKeyPress}>
        <div id="display">
          <div className="drum-pad" id="drum-q" onClick={() => this.handleQ()}>
            Q<audio src="" className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" id="drum-w" onClick={() => this.handleW()}>
            W<audio src="" className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" id="drum-e" onClick={() => this.handleE()}>
            E<audio src="" className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" id="drum-a" onClick={() => this.handleA()}>
            A<audio src="" className="clip" id="A"></audio>
          </div>
          <div className="drum-pad" id="drum-s" onClick={() => this.handleS()}>
            S<audio src="" className="clip" id="S"></audio>
          </div>
          <div className="drum-pad" id="drum-d" onClick={() => this.handleD()}>
            D<audio src="" className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" id="drum-z" onClick={() => this.handleZ()}>
            Z<audio src="" className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" id="drum-x" onClick={() => this.handleX()}>
            X<audio src="" className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" id="drum-c" onClick={() => this.handleC()}>
            C<audio src="" className="clip" id="C"></audio>
          </div>
          <div id="text">{this.state.key}</div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
