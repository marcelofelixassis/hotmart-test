import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from '../../store/ducks/sidebar/types';

const SidebarItem: React.FC<Props> = (props) => {
    const { item } = props
    return (
        <div className="sidebar-item-container">
            <div className="sidebar-header">
                <span className="text-value">SALDO</span>
                <span className="cash-text">{`${item.currency.symbol} ${item.declared}`}</span>
                <div className="check-container">
                    <div className="check-side">
                        <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                        <div className="check-item">
                            <span className="type-text">Gastou</span>
                            <span className="check-item-title">{`${item.currency.symbol} ${item.returned}`}</span>
                        </div>
                    </div>
                    <div className="check-side">
                        <FontAwesomeIcon icon={faArrowCircleDown} size="2x" />
                        <div className="check-item">
                            <span className="type-text">Recebeu</span>
                            <span className="check-item-title">{`${item.currency.symbol} ${item.received}`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-item-body">
                <span className="sidebar-item-body-title">Extrato</span>
                <hr />
                <div className="sidebar-item-body-list">
                    <div className="sidebar-item-body-list-side">
                        <span className="type-text-list">Descrição</span>
                        <span className="sidebar-item-body-title">Despesas Declaradas</span>
                        <span className="type-text">Despesas Declaradas pelo trooper</span>
                        <span className="sidebar-item-body-title">Despesas Aprovadas</span>
                        <span className="type-text">Despesas aprovadas pelo financeiro</span>
                        <span className="sidebar-item-body-title">Pagamento Realizado</span>
                        <span className="type-text">Pagamento realizado pelo financeiro</span>
                    </div>
                    <div className="sidebar-item-body-list-side">
                        <span className="type-text-list">Valor</span>
                        <span className="sidebar-item-body-title">{`${item.currency.symbol} ${item.declared}`}</span>
                        <span>-</span>
                        <span className="sidebar-item-body-title">{`${item.currency.symbol} ${item.approved}`}</span>
                        <span>-</span>
                        <span className="sidebar-item-body-title" style={{color: "green"}}>{`${item.currency.symbol} ${item.received}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
type Props = OwnProps

interface OwnProps {
    item: Sidebar,
}

export default SidebarItem;
