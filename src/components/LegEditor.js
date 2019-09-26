import React, { useState, useEffect } from "react";

const LegEditor = props => {
    const [visible, setVisible] = useState(false);
    const [newLabels, setNewLabels] = useState([]);

    const handleChange = e => {
        const newLabelsCopy = [...newLabels];
        newLabelsCopy[e.target.name] = e.target.value;
        setNewLabels([...newLabelsCopy]);
    }
    const removeLabel = idx => {
        setRemovedLabels([...removedLabels, idx]);
    }

    const removeLeg = idx => {
        const legInput = document.querySelector(`#legEditorForm div[id="${idx}"`);        
        legInput.style.display = "none";
        removeLabel(idx);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setLabels(newLabels);
    }
    
    useEffect(() => {
        if(visible) 
            document.querySelector("#legEditorForm").style.display = "block";
        else
            document.querySelector("#legEditorForm").style.display = "none";
    }, [visible])

    useEffect(() => {
        setNewLabels(props.labels);
    },[props.labels])

    return (
        <div className="legEditor">
            <button onClick={() => {setVisible(!visible);}}>Edit leg names</button>
            <form id="legEditorForm" onSubmit={handleSubmit}>
                {
                    newLabels.map((label, idx) => {
                        return <input onChange={e => handleChange(e)} name={idx} key={idx} 
                            value={newLabels[idx]} placeholder={label}></input>
                    })
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LegEditor;