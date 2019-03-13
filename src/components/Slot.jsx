import React from "react";

class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <Col>
                        <Row>
                            {this.state.weapon1.inscriptions[0].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(0)}</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {this.state.weapon1.inscriptions[1].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(1)}</h6>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <Row className="row-grid justify-content-between align-items-start text-left">
                    <Col>
                        <Row>
                            {this.state.weapon1.inscriptions[2].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
                            <h6>{this.getInscriptionDescription(2)}</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            {this.state.weapon1.inscriptions[3].type == "gear" ? <img style={styles2} src={require("assets/img/gear.png")} alt="my image"/>: <img style={styles2} src={require("assets/img/suit.png")} alt="my image"/>}
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