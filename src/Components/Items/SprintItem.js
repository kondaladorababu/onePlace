import React, { useContext } from 'react';
import '../Items/SprintItem.css';
import Button from '../UI/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from '../../Store/DataContextProvider';
import UIContext from '../../Store/UIContextProvider';

function SprintItem(props) {
    const { id, sprintVersion, sprintStartDate, sprintEndDate, sprintTeamName, sprintStatus } = props;

    const DataCtx = useContext(DataContext);
    const { removeSprintItem, getEditingItemDetails } = DataCtx;

    const UICtx = useContext(UIContext);

    const editSprintItem = () => {
        getEditingItemDetails(id);
        UICtx.handleEditSprintModal();
    }

    const deleteSprintItem = () => {
        removeSprintItem(id);
        UICtx.handleSprintDeletedModal();
    }

    return (
        <div className='sprint-item-container'>
            <div className="sprint-item-left">
                <h3 className='sprint-name'>{`R : ${sprintVersion} `}</h3>
                <div className="sprint-duration">
                    <h4 className='sprint-duration-title'>Duration :-</h4>
                    <div className="sprint-duration-time">
                        <p className='sprint-date sprint-start-date'>{sprintStartDate}</p>
                        <span className='sprint-middle'> to </span>
                        <p className='sprint-date sprint-end-date'>{sprintEndDate}</p>
                    </div>
                </div>
                <div className="sprint-team">
                    <h4 className='sprint-team-name-heading'>Team Name : </h4>
                    <p className='sprint-team-name'>{sprintTeamName}</p>
                </div>
            </div>

            <div className="sprint-item-right">

                <div className="sprint-status">
                    <h5 className='sprint-status-heading'>Status</h5>
                    <Button status={sprintStatus}>{sprintStatus}</Button>
                </div>

                <div className="sprint-editors">
                    <EditIcon onClick={editSprintItem} className='edit-sprint' />
                    <DeleteIcon onClick={deleteSprintItem} className='delete-sprint' />
                </div>
            </div>
        </div>
    )
}

export default SprintItem
