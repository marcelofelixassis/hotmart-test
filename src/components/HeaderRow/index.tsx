import React from 'react';
import './styles.css';

const HeaderRow: React.FC<Props> = (props) => {
    return (
        <div className="row">
            <span className="text-left">{props.leftText}</span>
            <span className="text-right">{props.rightText}</span>
        </div>
    )
}
  
type Props = OwnProps

interface OwnProps {
    leftText: string,
    rightText: string,
}

export default HeaderRow;
