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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";

class StatsPage extends React.Component {
  dropDownSelection;
  constructor(props){
    super(props);
    this.state = {
      weapon1: {},
      weapon2: {},
      modalDemo: false,
      rSelected: 0
    };

    this.toggleModalDemo = this.toggleModalDemo.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }

  weaponSelector = (e) => {
    console.log('This is my weapon: ' + e.target.innerText);
    let allWeapons = this.props.weapons;
    let selectedWeapon = allWeapons.filter(value => value.name === e.target.innerText);
    console.log(selectedWeapon[0].name + ' ' + 'desc: ' + selectedWeapon[0].description + ' special ' + selectedWeapon[0].special);
    this.setState({weapon1 : selectedWeapon[0]});
  }

  weaponSelector2 = (e) => {
    console.log('This is my weapon: ' + e.target.innerText);
    let allWeapons = this.props.weapons;
    let selectedWeapon = allWeapons.filter(value => value.name === e.target.innerText);
    console.log(selectedWeapon[0].name + ' ' + 'desc: ' + selectedWeapon[0].description + ' special ' + selectedWeapon[0].special);
    this.setState({weapon2 : selectedWeapon[0]});
  }

  toggleModalDemo(){
    this.setState({
      modalDemo: !this.state.modalDemo
    });
  }

  onRadioBtnClick(number) {
    this.setState({rSelected: number});
  }

  render() {
    let weaponDropdownItems = this.props.weapons.map((weap,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} onClick={this.weaponSelector}>{weap.name}</DropdownItem>)
    });
    let inscriptionDropdownItems = this.props.inscriptions.map((insc,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} >{insc}</DropdownItem>)
    });
    let weaponDropdownItems2 = this.props.weapons.map((weap,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} onClick={this.weaponSelector2}>{weap.name}</DropdownItem>)
    })
    let styles = {
      width: '50px',
      height: '50px',
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
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    Weapon Slot 1
                  </h1>
                  <UncontrolledDropdown group>
                    <DropdownToggle caret color="danger" data-toggle="dropdown">
                      Select your primary gun
                    </DropdownToggle>
                    <DropdownMenu>
                      {weaponDropdownItems}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <br/>
                  <Button className="btn-round btn-icon" color="default" onClick={this.toggleModalDemo}>
                    <i className="tim-icons icon-notes" />
                  </Button>
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
                        <i className="tim-icons icon-simple-remove" />
                      </button>
                    </div>
                    <ModalBody>
                      <ButtonGroup>
                        <Button size="sm" onClick={() => this.onRadioBtnClick(1)}
                                active={this.state.rSelected === 1}><img style={styles}
                                                                         src={require("assets/img/gear-icon.png")}
                                                                         alt="my image"/></Button>
                        <Button size="sm" onClick={() => this.onRadioBtnClick(1)}
                                active={this.state.rSelected === 1}><img style={styles}
                                                                         src={require("assets/img/suit-icon.png")}
                                                                         alt="my image"/></Button>
                      </ButtonGroup>
                      <br/>
                      <br/>
                      <NumericInput min={0} max={300} value={0}/>
                      <br/>
                      <br/>
                      <UncontrolledDropdown group>
                        <DropdownToggle caret data-toggle="dropdown">
                          Select Inscription ...
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
                            }} >
                          {inscriptionDropdownItems}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary">
                        Save
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    {this.state.weapon1.name}
                  </h1>
                  <h4 className="text-white">
                    {this.state.weapon1.description}
                  </h4>
                  <h4 className="text-warning">
                    {this.state.weapon1.special}
                  </h4>
                </Col>
              </Row>
              <br/><br/><br/>
            </div>
          </div>
        </div>
      </>
    );
  }


}

export default StatsPage;
