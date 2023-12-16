import React from 'react';
import '../Teams/TeamBoard.css';
import TeamItem from './TeamItem';
import Section from '../UI/Section';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

function TeamBoard() {

    return (
        <Section SectionTitle={'DashBoard'} Icon={SpaceDashboardIcon}>
            <div className='team-board'>
                <TeamItem TeamName={'OneHome'}  />
                <TeamItem TeamName={'Matrix'} />
                <TeamItem TeamName={'Trestle'} />
                <TeamItem TeamName={'Phoenix'} />
                <TeamItem TeamName={'Ldc'} />
                <TeamItem TeamName={'EPW'} />
                <TeamItem TeamName={'OneHome'} />
                <TeamItem TeamName={'GOMLS'} />
            </div>
        </Section >
    )
}

export default TeamBoard;
