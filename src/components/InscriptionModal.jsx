import React from "react";

import {
    Row,
    Col, ModalFooter, Button, DropdownMenu, DropdownToggle, UncontrolledDropdown, ButtonGroup, Modal, ModalBody
} from "reactstrap";

import NumericInput from 'react-numeric-input';

class InscriptionModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalDemo: false,
            rSelected: 0  
        };

        this.toggleModalDemo = this.toggleModalDemo.bind(this);
    }

    toggleModalDemo(){
        this.setState({
            modalDemo: !this.state.modalDemo
        });
    }

    render() {
        let styles = {
            width: '50px',
            height: '50px',
            display: 'inline-block',
        };
        return (
            <Modal isOpen={this.props.modalDemo} toggle={this.toggleModalDemo} modalClassName="modal-black">
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
                            <NumericInput min={0} max={300} value={this.props.slot.inscriptions[0].percentage} onBlur={this.onPercentageChange} inscrindex={0}/>
                            <br/>
                            <br/>
                            <UncontrolledDropdown group>
                                <DropdownToggle caret data-toggle="dropdown">
                                    {this.props.slot.inscriptions[0].description}
                                </DropdownToggle>
                                <DropdownMenu windex={(this.props.modalItem && this.props.modalItem.wIndex) ? this.props.modalItem.wIndex : 0}
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
                                    {this.props.inscriptionDropdownItemList[0]}
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
                            <NumericInput min={0} max={300} value={this.props.slot.inscriptions[1].percentage} onBlur={this.onPercentageChange} inscrindex={1}/>
                            <br/>
                            <br/>
                            <UncontrolledDropdown group>
                                <DropdownToggle caret data-toggle="dropdown">
                                    {this.props.slot.inscriptions[1].description}
                                </DropdownToggle>
                                <DropdownMenu windex={(this.props.modalItem && this.props.modalItem.wIndex) ? this.props.modalItem.wIndex : 0}
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
                                    {this.props.inscriptionDropdownItemList[1]}
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
                            <NumericInput min={0} max={300} value={this.props.slot.inscriptions[2].percentage} onBlur={this.onPercentageChange} inscrindex={2}/>
                            <br/>
                            <br/>
                            <UncontrolledDropdown group>
                                <DropdownToggle caret data-toggle="dropdown">
                                    {this.props.slot.inscriptions[2].description}
                                </DropdownToggle >
                                <DropdownMenu windex={(this.props.modalItem && this.props.modalItem.wIndex) ? this.props.modalItem.wIndex : 0}
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
                                    {this.props.inscriptionDropdownItemList[2]}
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
                            <NumericInput min={0} max={300} value={this.props.slot.inscriptions[3].percentage} onBlur={this.onPercentageChange} inscrindex={3}/>
                            <br/>
                            <br/>
                            <UncontrolledDropdown group>
                                <DropdownToggle caret data-toggle="dropdown">
                                    {this.props.slot.inscriptions[3].description}
                                </DropdownToggle>
                                <DropdownMenu windex={(this.props.modalItem && this.props.modalItem.wIndex) ? this.props.modalItem.wIndex : 0}
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
                                    {this.props.inscriptionDropdownItemList[3]}
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
        );
    }
}

export default InscriptionModal;