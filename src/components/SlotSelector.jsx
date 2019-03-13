import React from "react";

import {
    Row,
    Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, Button,
} from "reactstrap";

class SlotSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col lg="6" md="6">
                <h1 className="text-white">
                    Weapon Slot 1
                </h1>
                <UncontrolledDropdown group>
                    <DropdownToggle caret color="danger" data-toggle="dropdown">
                        { this.props.slot && this.props.slot.name ? this.props.slot.name : "Select your primary gun"}
                    </DropdownToggle>
                    <DropdownMenu windex={this.props.windex}>
                        {this.props.weaponDropdownItems}
                    </DropdownMenu>
                </UncontrolledDropdown>
                <br/>
                <Button className="btn-round btn-icon" color="default" onClick={this.props.inscriptionButtonHandler}>
                    <i className="tim-icons icon-notes" />
                </Button>
            </Col>
        );
    }
}

export default SlotSelector;