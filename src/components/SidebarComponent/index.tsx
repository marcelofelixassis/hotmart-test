import React from 'react';
import { Sidebar } from '../../store/ducks/sidebar/types';
import SidebarItem from '../SidebarItem';
import './styles.css';

const SidebarComponent: React.FC<Props> = (props) => {
    const { sidebarItens } = props
    return (
        <>
            <div className="status-container">
                <span className="status-text-sidebar">Status</span>
                <span className="done-text-sidebar">Concluído</span>
            </div>
            {sidebarItens.map((item, key) => <SidebarItem item={item} key={key} />)}
        </>
    )
}
  
type Props = OwnProps

interface OwnProps {
    sidebarItens: Sidebar[],
}

export default SidebarComponent;
