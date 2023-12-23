import React, { useContext } from 'react';
import '../Sections/Sprint.css';
import SprintItem from '../Items/SprintItem';
import Button from '../UI/Button';
import UIContext from '../../Store/UIContextProvider';


function Sprint() {
    const UICtx = useContext(UIContext);

    const openNewSprintModal = () => {
        UICtx.handleNewSprintModal();
    }

    return (
        <section className='sprint-container'>
            <div className="sprint-header">
                <h4 className='sprint-heading'>Sprint Items:</h4>
                <Button onClick={openNewSprintModal} status={'new'}>Add Sprint</Button>
            </div>
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <SprintItem />
            <Button status={'completed'}>Load More</Button>
        </section>
    )
}

export default Sprint
