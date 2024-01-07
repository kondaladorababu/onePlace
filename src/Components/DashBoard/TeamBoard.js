import React from 'react';
import './TeamBoard.css';
import TeamItem from './TeamItem';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Section from '../Sections/Section';
import { Link } from 'react-router-dom';

function TeamBoard() {

    return (
        <Section SectionTitle={'DashBoard'} Icon={SpaceDashboardIcon}>
            <div className='team-board'>
                <Link to='/onehomeDashBoard'>
                    <TeamItem TeamName={'OneHome'} />
                </Link>

                <Link className={'team-items'} to='/matrixDashBoard'>
                    <TeamItem TeamName={'Matrix'} />
                </Link>

                <Link className={'team-items'} to='/trestleDashBoard'>
                    <TeamItem TeamName={'Trestle'} />
                </Link>

                <Link className={'team-items'} to='/phoenixDashBoard'>
                    <TeamItem TeamName={'Phoenix'} />
                </Link>

                <Link className={'team-items'} to='/ldcDashBoard'>
                    <TeamItem TeamName={'Ldc'} />
                </Link>

                <Link className={'team-items'} to='/epwdashBoard'>
                    <TeamItem TeamName={'EPW'} />
                </Link>

                <Link className={'team-items'} to='/gomlsDashBoard'>
                    <TeamItem TeamName={'GOMLS'} />
                </Link>

            </div>
        </Section >
    )
}

export default TeamBoard;
