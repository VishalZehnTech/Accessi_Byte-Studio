import React from "react";
import {FaChevronRight} from 'react-icons/fa';

function ContextIndex(props) {
    const arr = props.titleName;
    const newArr = arr.map((title, index) => 
    {
        const IconComponent = title.iconName
            return (
                <li key={index} className="contextList">
                    {IconComponent && <IconComponent size={25} />}  &nbsp;&nbsp;
                    <button className="contextBtn">  {title.titleText}</button>

                    <FaChevronRight size={25} className=""/>  &nbsp;&nbsp;
                </li>);
        });

    return (
        <div className="contextIndexDiv">
            <ul className="contextUnorderList" >
                {newArr}
            </ul>
        </div>
    );
}

export default ContextIndex;