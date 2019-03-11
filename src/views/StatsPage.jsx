import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Row, Col,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";

class StatsPage extends React.Component {
  dropDownSelection;
  constructor(props){
    super(props);
    this.state = {
      weapon1: {},
      weapon2: {}
    };
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

  render() {
    let weaponDropdownItems = this.props.weapons.map((weap,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} onClick={this.weaponSelector}>{weap.name}</DropdownItem>)
    });
    let weaponDropdownItems2 = this.props.weapons.map((weap,index) => {
      return(<DropdownItem key={index} ref={this.dropDownSelection} onClick={this.weaponSelector2}>{weap.name}</DropdownItem>)
    })
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
              <Row className="row-grid justify-content-between align-items-start text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    Weapon Slot 2
                  </h1>
                  <UncontrolledDropdown group>
                    <DropdownToggle caret color="danger" data-toggle="dropdown">
                      Select your secondary gun
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownMenu>
                        {weaponDropdownItems2}
                      </DropdownMenu>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <br/>
                </Col>
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    {this.state.weapon2.name}
                  </h1>
                  <h4 className="text-white">
                    {this.state.weapon2.description}
                  </h4>
                  <h4 className="text-warning">
                    {this.state.weapon2.special}
                  </h4>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StatsPage;
