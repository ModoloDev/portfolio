import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

import './NavigationButton.css'
import React from "react";

library.add(faArrowLeft, faArrowRight)

const icons: Record<Direction, IconDefinition> = {
    'prev': faArrowLeft,
    'next': faArrowRight
}

export type Direction = 'prev' | 'next'

type Props = {
    direction: Direction
    changePage:  React.MouseEventHandler<HTMLButtonElement>
}

export default function NavigationButton({direction, changePage}: Props) {
    return (
        <button className={`navigation ${direction}`} onClick={changePage}>
            <FontAwesomeIcon icon={icons[direction]} className='icon'/>
        </button>
    )
}