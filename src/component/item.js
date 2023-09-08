import { useState } from "react";
import "./item.css";
import { FiXCircle, FiEdit } from 'react-icons/fi';

const ListTask = (props) => {
    const { taskName, onRemove, onEdit } = props;

    const [isChecked, setIsChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newTaskName, setNewTaskName] = useState(taskName);

    const handleCheck = () => {
        setIsChecked(!isChecked);

    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        onEdit(newTaskName);
        setEditMode(false);
    };

    return (
        <ul className="ulList">
          <li>
            <div>
              {editMode ? (
                <>
                  <input className="updateTask"
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                  />
                  <button className="save-btn" onClick={handleSaveClick}>Save</button>
                </>
              ) : (
                <span className={isChecked ? 'task-List check' : 'task-List'} onClick={handleCheck}>
                  <input
                    type="checkbox"
                    className="checkList"
                    checked={isChecked}
                    onChange={handleCheck}
                  />
                  <span className="span-taskName">{taskName}</span>
                </span>
                
              )}
              {!editMode && (
          <div className="btns-list">
            <FiEdit className="btn-list edit-btn" onClick={handleEditClick} />
            <FiXCircle className="btn-list remove-btn" onClick={onRemove} />
          </div>
        )}
            </div>
          </li>
        </ul>
      );
};

export default ListTask;
