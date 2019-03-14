import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Row,
  DropdownItem,
} from "reactstrap";

import Slot from "components/Slot.jsx";
import SlotSelector from "components/SlotSelector.jsx";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import InscriptionModal from "../components/InscriptionModal";

class StatsPage extends React.Component {
  dropDownSelection;
  constructor(props){
    super(props);
    this.state = {
      weapon1: {
        wIndex: 1,
        inscriptions: [
            {
              type: "gear",
              percentage: 10,
              description: "Mks Rifle +{X}% Dmg"
            },
            {
              type: "suit",
              percentage: 10,
              description: "Mks Rifle +{X}% Dmg"},
            {
              type: "gear",
              percentage: 10,
              description: "Mks Rifle +{X}% Dmg"},
            {
              type: "gear",
              percentage: 10,
              description: "Mks Rifle +{X}% Dmg"
            }
        ]
      },
        weapon2: {
            wIndex: 2,
            inscriptions: [
                {
                    type: "gear",
                    percentage: 10,
                    description: "Mks Rifle +{X}% Dmg"
                },
                {
                    type: "suit",
                    percentage: 10,
                    description: "Mks Rifle +{X}% Dmg"},
                {
                    type: "gear",
                    percentage: 10,
                    description: "Mks Rifle +{X}% Dmg"},
                {
                    type: "gear",
                    percentage: 10,
                    description: "Mks Rifle +{X}% Dmg"
                }
            ]
        },
      modalDemo: false,
      modalItem: null,
      rSelected: 0
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    //this.toggleModalDemo = this.toggleModalDemo.bind(this);
  }
  componentDidMount() {
    let slider1 = this.refs.slider1;
/*    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 10,
      range: { min: 0, max: 300 }
    });*/
    document.body.classList.toggle("landing-page");
  }

  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  weaponSelector = (e) => {
    console.log('This is my weapon: ' + e.target.innerText);
    let allWeapons = this.props.weapons;
    let selectedWeapon = allWeapons.filter(value => value.name === e.target.innerText);
    console.log(selectedWeapon[0].name + ' ' + 'desc: ' + selectedWeapon[0].description + ' special ' + selectedWeapon[0].special + ' weaponIndex ' + e.target.parentElement.getAttribute("windex"));
    let wIndex = Math.trunc(e.target.parentElement.getAttribute("windex"));
    wIndex == 1 ? this.setState({weapon1 : selectedWeapon[0]}) : this.setState({weapon2 : selectedWeapon[0]});
  }

  toggleModalDemo = (slotItem, wIndex) =>{
    slotItem.wIndex = wIndex;
    this.setState({
      modalDemo: !this.state.modalDemo,
      modalItem: slotItem
    });
  }

  //GEAR/JAVELIN
  onRadioBtnClick = (e) => {
    let inscrIndex = Math.trunc(e.currentTarget.getAttribute("inscrindex"));
    let weapon1 = {...this.state.weapon1};
    weapon1.inscriptions[inscrIndex].type = e.currentTarget.getAttribute("type");
    this.setState({weapon1});
  }

  //PERCENTAGE
  onPercentageChange = (event) =>{
    let inscrIndex = Math.trunc(event.target.getAttribute("inscrindex"));
    let weapon1 = {...this.state.weapon1};
    weapon1.inscriptions[inscrIndex].percentage = event.target.getValueAsNumber();
    this.setState({weapon1});
  }

  //INSCRIPTION DESCRIPTION
  updateItemState = (e) => {
    let inscrIndex = Math.trunc(e.target.getAttribute("inscription"));
    console.log('This is my inscription: ' + e.target.innerText);
    debugger;
    let wIndex = Math.trunc(e.target.parentElement.getAttribute("windex"));
    if(wIndex == 1){
      let weapon1 = {...this.state.weapon1};
      weapon1.inscriptions[inscrIndex].description = e.target.innerText;
      this.setState({weapon1});
    }
    else if(wIndex == 2){
      let weapon2 = {...this.state.weapon2};
      weapon2.inscriptions[inscrIndex].description = e.target.innerText;
      this.setState({weapon2});
    }
  }


  render() {
    let weaponDropdownItems = this.props.weapons.map((weap,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} onClick={this.weaponSelector}>{weap.name}</DropdownItem>)
    });
    let originArr = [0,1,2,3];
    let inscriptionDropdownItemList = [];

    originArr.map( (val, index)  => {
      inscriptionDropdownItemList.push(this.props.inscriptions.map((insc,i) => {
        return(<DropdownItem key={i} ref={this.dropDownSelection} onClick={this.updateItemState} inscription={index}>{insc}</DropdownItem>)
      }));
    });

    let styles = {
      width: '50px',
      height: '50px',
      display: 'inline-block',
    };
    let styles2 = {
      width: '25px',
      height: '25px',
      display: 'inline-block',
    };

    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-start text-left">
                  <SlotSelector slot={this.state.weapon1} weaponDropdownItems={weaponDropdownItems} inscriptionButtonHandler={() => this.toggleModalDemo(this.state.weapon1,1)} windex={1} />
                  {this.state.weapon1 ? <Slot slot={this.state.weapon1}/> : null}
              </Row>
              <br/><br/><br/>
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <SlotSelector slot={this.state.weapon2} weaponDropdownItems={weaponDropdownItems} inscriptionButtonHandler={() => this.toggleModalDemo(this.state.weapon2,2)} windex={2}/>
                    {this.state.weapon2 ? <Slot slot={this.state.weapon2}/> : null}
                </Row>
            </div>
          </div>
        </div>
        <InscriptionModal slot={this.state.weapon1} modalItem={this.state.modalItem} modalDemo={this.state.modalDemo} inscriptionDropdownItemList={inscriptionDropdownItemList}/>

      </>
    );
  }
}

export default StatsPage;
