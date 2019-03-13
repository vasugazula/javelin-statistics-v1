import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup
} from "reactstrap";

import NumericInput from 'react-numeric-input';
import Slot from "components/Slot.jsx";
import SlotSelector from "components/SlotSelector.jsx";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Nouislider from 'react-nouislider';

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
      rSelected: 0
    };

    this.toggleModalDemo = this.toggleModalDemo.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
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


  toggleModalDemo(){
    this.setState({
      modalDemo: !this.state.modalDemo
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
    this.state.weapon1.inscriptions[inscrIndex].description = e.target.innerText;
    let weapon1 = {...this.state.weapon1};
    weapon1.inscriptions[inscrIndex].description = e.target.innerText;
    this.setState({weapon1});
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
                  <SlotSelector slot={this.state.weapon1} weaponDropdownItems={weaponDropdownItems} inscriptionButtonHandler={this.toggleModalDemo} windex={1} />
                  {this.state.weapon1 ? <Slot slot={this.state.weapon1}/> : null}
              </Row>
              <br/><br/><br/>
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <SlotSelector slot={this.state.weapon2} weaponDropdownItems={weaponDropdownItems} inscriptionButtonHandler={this.toggleModalDemo} windex={2}/>
                    {this.state.weapon2 ? <Slot slot={this.state.weapon2}/> : null}
                </Row>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo} modalClassName="modal-black">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Inscriptions
            </h5>
            <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={this.toggleModalDemo}
            >
              <i className="tim-icons icon-simple-remove"/>
            </button>
          </div>
          <ModalBody>
            <Row>
              <Col>
                <ButtonGroup>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={0} type={"gear"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/gear.png")}
                                                                   alt="my image"/></Button>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={0} type={"suit"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/suit.png")}
                                                                   alt="my image"/></Button>
                </ButtonGroup>
                <br/>
                <br/>
                <NumericInput min={0} max={300} value={this.state.weapon1.inscriptions[0].percentage} onBlur={this.onPercentageChange} inscrindex={0}/>
                <br/>
                <br/>
                <UncontrolledDropdown group>
                  <DropdownToggle caret data-toggle="dropdown">
                    {this.state.weapon1.inscriptions[0].description}
                  </DropdownToggle>
                  <DropdownMenu
                      modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: 300,
                              },
                            };
                          },
                        },
                      }}
                  >
                    {inscriptionDropdownItemList[0]}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col>
                <ButtonGroup>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={1} type={"gear"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/gear.png")}
                                                                   alt="my image"/></Button>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={1} type={"suit"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/suit.png")}
                                                                   alt="my image"/></Button>
                </ButtonGroup>
                <br/>
                <br/>
                <NumericInput min={0} max={300} value={this.state.weapon1.inscriptions[1].percentage} onBlur={this.onPercentageChange} inscrindex={1}/>
                <br/>
                <br/>
                <UncontrolledDropdown group>
                  <DropdownToggle caret data-toggle="dropdown">
                    {this.state.weapon1.inscriptions[1].description}
                  </DropdownToggle>
                  <DropdownMenu
                      modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: 300,
                              },
                            };
                          },
                        },
                      }}
                  >
                    {inscriptionDropdownItemList[1]}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonGroup>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={2} type={"gear"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/gear.png")}
                                                                   alt="my image"/></Button>
                  <Button size="sm" onClick={this.onRadioBtnClick} inscrindex={2} type={"suit"}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/suit.png")}
                                                                   alt="my image"/></Button>
                </ButtonGroup>
                <br/>
                <br/>
                <NumericInput min={0} max={300} value={this.state.weapon1.inscriptions[2].percentage} onBlur={this.onPercentageChange} inscrindex={2}/>
                <br/>
                <br/>
                <UncontrolledDropdown group>
                  <DropdownToggle caret data-toggle="dropdown">
                    {this.state.weapon1.inscriptions[2].description}
                  </DropdownToggle>
                  <DropdownMenu
                      modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: 300,
                              },
                            };
                          },
                        },
                      }}
                  >
                    {inscriptionDropdownItemList[2]}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col>
                <ButtonGroup>
                  <Button size="sm" onClick={this.onRadioBtnClick} type={"gear"} inscrindex={3}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/gear.png")}
                                                                   alt="my image"/></Button>
                  <Button size="sm" onClick={this.onRadioBtnClick} type={"suit"} inscrindex={3}
                          active={this.state.rSelected === 1}><img style={styles}
                                                                   src={require("assets/img/suit.png")}
                                                                   alt="my image"/></Button>
                </ButtonGroup>
                <br/>
                <br/>
                <NumericInput min={0} max={300} value={this.state.weapon1.inscriptions[3].percentage} onBlur={this.onPercentageChange} inscrindex={3}/>
                <br/>
                <br/>
                <UncontrolledDropdown group>
                  <DropdownToggle caret data-toggle="dropdown">
                    {this.state.weapon1.inscriptions[3].description}
                  </DropdownToggle>
                  <DropdownMenu
                      modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: 300,
                              },
                            };
                          },
                        },
                      }}
                  >
                    {inscriptionDropdownItemList[3]}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>

          </ModalBody>
          <ModalFooter>
            <Button color="primary">
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default StatsPage;
