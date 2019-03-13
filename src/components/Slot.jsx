import React from "react";

import {
    Row,
    Col,
} from "reactstrap";

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    getInscriptionDescription(number){
        let inscr = this.props.slot.inscriptions[number];
        return inscr.description.replace("{X}", inscr.percentage);
    }

    render() {
        let styles2 = {
            width: '25px',
            height: '25px',
            display: 'inline-block',
        };
        return (
            <Col lg="6" md="6">
                <h1 className="text-white">
                    {this.props.slot.name}
                </h1>
                <h4 className="text-white">
                    {this.props.slot.description}
                </h4>
                <h4 className="text-warning">
                    {this.props.slot.special}
                </h4>
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <Col>
                        <Row>
                            {this.props.slot.inscriptions[0].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(0)}</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {this.props.slot.inscriptions[1].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(1)}</h6>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <Col>
                        <Row>
                            {this.props.slot.inscriptions[2].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(2)}</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {this.props.slot.inscriptions[3].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(3)}</h6>
                        </Row>
                    </Col>
                </Row>

                <br/>
            </Col>
        );
    }
}

export default Slot;