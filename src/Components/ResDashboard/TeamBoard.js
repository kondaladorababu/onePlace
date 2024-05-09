import React from 'react';
import './TeamBoard.css';
import TeamItem from './TeamItem';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Section from '../Sections/Section';
import { useNavigate } from 'react-router-dom';

function TeamBoard() {
    const navigateTo = useNavigate();

    const navigateDashBoard = (teamName) => {
        navigateTo(`/${teamName}`);
    }

    return (
        <Section SectionTitle={'DashBoard'} Icon={SpaceDashboardIcon}>
            <div className='team-board'>
                <TeamItem TeamName={'OneHome'} onClick={() => { navigateDashBoard('oneHomeDashBoard') }} />

                <TeamItem TeamName={'Matrix'} onClick={() => { navigateDashBoard('matrixDashBoard') }} />

                <TeamItem TeamName={'Trestle'} onClick={() => { navigateDashBoard('trestleDashBoard') }} />

                <TeamItem TeamName={'Phoenix'} onClick={() => { navigateDashBoard('phoenixDashBoard') }} />

                <TeamItem TeamName={'Ldc'} onClick={() => { navigateDashBoard('ldcDashBoard') }} />

                <TeamItem TeamName={'EPW'} onClick={() => { navigateDashBoard('epwDashBoard') }} />

                <TeamItem TeamName={'GOMLS'} onClick={() => { navigateDashBoard('gomlsDashBoard') }} />
            </div>
        </Section >
    )
}

export default TeamBoard;
