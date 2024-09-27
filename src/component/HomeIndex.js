import React from "react";
import ContextIndex from '../component/ContextIndex.js';
import {
    FaSearchPlus, FaSmileBeam,
    FaSmile, FaCloud, FaNewspaper, FaCalendarAlt, FaTasks,
    FaEnvelope, FaYoutube, FaPodcast,
    FaEye, FaVolumeUp, FaCog,
    FaInfoCircle, FaTools, FaWrench, FaChevronLeft,
    FaSoundcloud, FaSun
} from 'react-icons/fa';
import { IoEarthSharp } from 'react-icons/io5'; // For "Internet"

function HomeIndex() {
    const container1 = [
        { iconName: FaSmile, titleText: "Register a License" } // Register License Icon
    ];

    const container2 = [
        { iconName: FaCloud, titleText: "Weather" },       // Weather Icon
        { iconName: FaNewspaper, titleText: "News" },         // News Icon
        { iconName: FaCalendarAlt, titleText: "Calendar" },   // Calendar Icon
        { iconName: FaTasks, titleText: "To-Do Tasks" }       // Tasks Icon
    ];

    const container3 = [
        { iconName: IoEarthSharp, titleText: "Internet" },    // Internet Icon
        { iconName: FaEnvelope, titleText: "Email" },         // Email Icon
        { iconName: FaYoutube, titleText: "YouTube" },        // YouTube Icon
        { iconName: FaPodcast, titleText: "Podcasts" }        // Podcasts Icon
    ];

    const container4 = [
        { iconName: FaEye, titleText: "Visuals" },            // Visuals Icon
        { iconName: FaVolumeUp, titleText: "Audio" },         // Audio Icon
        { iconName: FaCog, titleText: "App Settings" }        // App Settings Icon
    ];

    const container5 = [
        { iconName: FaInfoCircle, titleText: "About" },       // About Icon
    ];

    const container6 = [
        { iconName: FaTools, titleText: "Advanced Settings" }, // Advanced Settings Icon
        { iconName: FaWrench, titleText: "Pro Settings" }      // Pro Settings Icon
    ];

    const container7 = [
        { iconName: FaChevronLeft, titleText: "Go Back" },      // Go Back Icon
    ];

    return (
        <div>
            <div className="txtHeaderStyle">
                <div>Logo</div>
                <h1>Main Menu</h1>
                <div className="txtheaderFaIcons">
                    <FaSearchPlus size={25} className="item" /> &nbsp;&nbsp;
                    <FaSmileBeam size={25} className="item" /> &nbsp;&nbsp;
                    <FaSun size={25} className="item" />  &nbsp;&nbsp;
                </div>
            </div>
            <div className="contextStyle">
                <ContextIndex titleName={container1}></ContextIndex>
                <ContextIndex titleName={container2}></ContextIndex>
                <ContextIndex titleName={container3}></ContextIndex>
                <ContextIndex titleName={container4}></ContextIndex>
                <ContextIndex titleName={container5}></ContextIndex>
                <ContextIndex titleName={container6}></ContextIndex>
                <ContextIndex titleName={container7}></ContextIndex>
            </div>
        </div>
    );
}

export default HomeIndex;
