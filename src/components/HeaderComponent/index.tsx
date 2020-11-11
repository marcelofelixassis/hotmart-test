import React from 'react';
import HeaderRow from '../HeaderRow';
import './styles.css';
import { Header } from '../../store/ducks/header/types';

const HeaderComponent: React.FC<Props> = (props) => {
    const { infos } = props;
    return(
        <div className="header">
            <span className="header-title">Reembolso - Confraternização</span>
            <div className="divider">
            <div className="header-infos-container">
                <div className="list">
                        <div className="infos-row">
                            <HeaderRow leftText="Nome" rightText={infos.name} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="E-mail" rightText={infos.email} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Justificativa" rightText={infos.justification} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Finalidade" rightText={infos.purpose} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Projeto" rightText={infos.project} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Data" rightText={new Date(infos.createdOn).toLocaleDateString("pt-BR")} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Quantidade" rightText={`${infos.amountOfPeople} pessoas`} />
                        </div>
                        <div className="infos-row">
                            <HeaderRow leftText="Inclui café da manhã" rightText={infos.budgetForBreakfast ? "Não" : "Sim"} />
                        </div>
                    </div>
            </div>
            <div className="header-add">
                <div className="add-box">
                        <span className="input-title">Atribuir analista</span>
                        <input className="input-teste" placeholder="Atribuir analista"></input>
                        <span className="input-title">Centro de Custo</span>
                        <span className="input-title">100% - Approval CC Test</span>
                </div>
            </div>
            </div>
        </div>
    )
}

type Props = OwnProps

interface OwnProps {
    infos: Header,
}

export default HeaderComponent;
