import React from 'react';
import { Timeline } from '../../store/ducks/timeline/types';
import TimelineItem from '../TimelineItem';
import './styles.css';

const TimelineList: React.FC<Props> = (props) => {
    const { timelineItens } = props
    return (
        <>
            {timelineItens.map((item, key) => <TimelineItem item={item} key={key}/>)}
        </>
    )
}
  
type Props = OwnProps

interface OwnProps {
    timelineItens: Timeline[],
}

export default TimelineList;
