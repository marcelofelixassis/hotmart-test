import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import * as HeaderActions from '../../store/ducks/header/actions';
import * as TimelimeActions from '../../store/ducks/timeline/actions';
import * as SidebarActions from '../../store/ducks/sidebar/actions';
import HeaderComponent from '../../components/HeaderComponent';
import { Header } from '../../store/ducks/header/types';
import './styles.css';
import { Timeline } from '../../store/ducks/timeline/types';
import TimelineList from '../../components/TimelineList';
import SidebarComponent from '../../components/SidebarComponent';
import { Sidebar } from '../../store/ducks/sidebar/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC<Props> = (props) => {
    const { loadHeader, loadTimeline, loadSidebar, addItem, timeline, header, sidebar } = props;

    useEffect(() => {
        loadHeader();
        loadTimeline();
        loadSidebar();
    })

    const addNewItem = () => {
        const newItem = {
            amountSpent: 11.11,
            amountTotal: 222.22,
            cardDate: 1585710000000,
            cardType: "EXPENSE",
            contentType: "image/png",
            currencyCode: "BRL",
            currencyId: 3,
            currencySymbol: "R$",
            expenseEvaluation: null,
            expenseId: 545,
            expenseTypeCode: "hotel-fee",
            expenseTypeIcon: "concierge-bell",
            expenseTypeId: 5,
            id: 545,
            invoiceDate: 1585710000000,
            notes: "sadasd",
            status: "PENDING",
            updatedOn: 1585069977693,
        } as Timeline;
        addItem(newItem);
    }

    return(
    <div className="home-container">
        <div className="home-container-left">
            <HeaderComponent infos={header} />
            <div className="btn-add-container">
                <button className="btn-add" onClick={() => addNewItem()}>
                    <FontAwesomeIcon icon={faFileAlt} />
                    Adicionar Despesa
                </button>
            </div>
            <TimelineList timelineItens={timeline} />
        </div>
        <div className="home-container-right">
            <SidebarComponent sidebarItens={sidebar}/>
        </div>
    </div>
    )
}

interface StateProps {
    header: Header,
    timeline: Timeline[],
    sidebar: Sidebar[],
}

interface DispatchProps {
    loadHeader(): void,
    loadTimeline(): void,
    loadSidebar(): void,
    addItem(data: Timeline): void,
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
    header: state.header.data,
    timeline: state.timeline.data,
    sidebar: state.sidebar.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({...HeaderActions, ...TimelimeActions, ...SidebarActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
