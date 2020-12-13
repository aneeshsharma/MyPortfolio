import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import "../css/landing.css";
import "../css/nav.css";
import "../css/projects.css";
import "@fortawesome/fontawesome-free/css/all.css";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.definingText = [
            "Software Developer",
            "Fullstack Engineer",
            "Game Designer",
            "CG Artist",
        ];
        this.frameDuration = 15;
        this.holdDuration = 3000;
        this.state = {
            index: 0,
            define: this.definingText[0],
            blink: true,
        };

        this.projectsRef = React.createRef();
    }

    componentDidMount() {
        window.setInterval(this.blink, 500);
        this.changeDefiningText();
    }

    blink = () => {
        var blink = this.state.blink;
        blink = !blink;
        this.setState({ blink: blink });
    };

    scrollToRef = (ref) => {
        window.scrollTo(0, ref.current.offsetTop);
    };

    changeDefiningText = () => {
        var index = this.state.index;
        index++;
        if (index >= this.definingText.length) {
            index = 0;
        }
        this.setState({ index: index });
        window.setTimeout(this.eraseText, this.holdDuration);
    };

    eraseText = () => {
        var text = this.state.define;
        if (text.length <= 0) {
            window.setTimeout(this.buildText(), this.frameDuration);
        } else {
            text = text.substring(0, text.length - 1);
            this.setState({
                define: text,
            });
            window.setTimeout(this.eraseText, this.frameDuration);
        }
    };

    buildText = () => {
        var text = this.state.define;
        var finalText = this.definingText[this.state.index];
        if (text.length >= finalText.length) {
            window.setTimeout(this.changeDefiningText(), this.frameDuration);
        } else {
            text = finalText.substring(0, text.length + 1);
            this.setState({
                define: text,
            });
            window.setTimeout(this.buildText, this.frameDuration);
        }
    };

    renderBlink = () => {
        if (this.state.blink) {
            return <span>_</span>;
        } else {
            return <span>&nbsp;&nbsp;</span>;
        }
    };

    renderNav = () => {
        return (
            <div className='nav'>
                <Col xs={6}>
                    <Row className='logo'>It's Anish</Row>
                </Col>
                <Col>Projects</Col>
                <Col>Experience</Col>
                <Col>Contact</Col>
            </div>
        );
    };

    renderLanding = () => {
        const blink = this.renderBlink();
        return (
            <div className='landing-section'>
                <Row>
                    Hey!&nbsp;&nbsp;
                    <div style={{ color: "#55ff55" }}>I'm Anish</div>
                </Row>
                <br />
                Your Friendly Neighbourhood <br />
                <b style={{ cursor: "pointer", color: "#ffff33" }}>
                    {this.state.define}
                    {blink}
                </b>
                <Row>
                    <a href='https://github.com/aneeshsharma'>
                        <i class='fab fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/anishsharma15/'>
                        <i class='fab fa-linkedin'></i>
                    </a>
                </Row>
                <div
					style={{ display: 'none' }} 
					className='know-more-button'
                    onClick={() => {
                        this.scrollToRef(this.projectsRef);
                    }}
                >
                    Know More<i className='fas fa-chevron-down'></i>
                </div>
            </div>
        );
    };

    renderProjects = () => {
        return (
            <div className='projects-section' ref={this.projectsRef}>
                <h1>Projects</h1>
                <div className='project-row'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        );
    };
    render() {
        let nav = this.renderNav();
        let landing = this.renderLanding();
        //let projects = this.renderProjects();
        return (
            <div>
                {nav}
                {landing}
            </div>
        );
    }
}

export default Landing;
