import React from 'react';
import { Timeline } from '../../store/ducks/timeline/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faAsterisk, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const TimelineItem: React.FC<Props> = (props) => {
    const { item } = props

    const renderIcon = (type: string) => {
        switch (true) {
            case (type === "EVALUATION"):
                return <FontAwesomeIcon icon={faUsers} size="lg" color="#5f6772"/>
            case (type === "ACCOUNTABILITY_SUBMITTED" || type === "ACCOUNTABILITY_CREATED"):
                return <FontAwesomeIcon icon={faAsterisk} size="lg" color="#5f6772"/>
            case (type === "EXPENSE"):
                return <FontAwesomeIcon icon={faConciergeBell} size="lg" color="#0f68bd"/>
            default:
                return <></>
        }
    }

    const renderTitle = (type: Timeline) => {
        switch (true) {
            case (type.cardType === "EVALUATION"):
                return `Aprovação da solicitação ${type.author?.name}`
            case (type.cardType === "ACCOUNTABILITY_SUBMITTED" || type.cardType === "ACCOUNTABILITY_CREATED"):
                return `Solicitação concluída por ${type.author?.name}`
            case (type.cardType === "EXPENSE"):
                return "Hotel"
            default:
                return <></>
        }
    }

    return (
        <div className="timeline-item-container">
            <div className="icon-and-date">
                <div className="icon-border">{renderIcon(item.cardType)}</div>
                <span className="date-text">{new Date(item.cardDate).toLocaleDateString("pt-BR")}</span>
            </div>
            <div className="type-and-title">
                <div className="type-text">TIPO</div>
                <span className="title-text">{renderTitle(item)}</span>
                <span className="subtitle-text">{item.notes}</span>
            </div>
            {item.cardType === "EXPENSE" &&
                <div className="value">
                    <div className="type-text">VALOR</div>
                    <div className="title-text">{`${item.currencySymbol} ${item.amountTotal}`}</div>
                    <span className="subtitle-text">{`Valor da nota: ${item.currencySymbol} ${item.amountSpent}`}</span>
                </div>
            }
            {item.cardType !== "ACCOUNTABILITY_SUBMITTED" && item.cardType !== "ACCOUNTABILITY_CREATED" &&
                <div className="status">
                    <div className="type-text">STATUS</div>
                    <div className="approved">Aprovado</div>
                    {item.cardType === "EXPENSE" && 
                        <>
                            <div className="deductible">Dedutível</div>
                            <div className="subtitle-text">{`Valor aprovado: ${item.currencySymbol} ${item.amountTotal}`}</div>
                        </>
                    }
                </div>
            }
        </div>
    )
}
  
type Props = OwnProps

interface OwnProps {
    item: Timeline,
}

export default TimelineItem;
