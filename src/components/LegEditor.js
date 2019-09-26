import React, { useState, useEffect } from "react";

const LegEditor = props => {
    const [visible, setVisible] = useState(false);
    const [newLabels, setNewLabels] = useState([]);
    const [removedLabels, setRemovedLabels] = useState([]);

    const handleChange = e => {
        const newLabelsCopy = [...newLabels];
        newLabelsCopy[e.target.name] = e.target.value;
        setNewLabels([...newLabelsCopy]);
    }
    
    const removeLabel = idx => {
        // const newLabelsCopy = [...newLabelsCopy];
        // newLabelsCopy.splice(idx, 1);
        // setNewLabels([...newLabelsCopy]);
        setRemovedLabels([...removedLabels, idx]);
    }

    const removeLeg = idx => {
        // const leg = document.querySelector(`#legEditorForm input[name="${idx}"]`);
        // const delLeg = document.querySelector(`#legEditorForm button[name="del${idx}"]`);
        // if(!leg) console.log(`error no leg ${idx}`);
        // if(!delLeg) console.log(`error no delleg ${idx}`);
        // document.querySelector("#legEditorForm").removeChild(leg);
        // document.querySelector("#legEditorForm").removeChild(delLeg);
        // console.log(`index=${idx}, leg=${leg}, delleg=${delLeg}\n\n\n`)
        // removeLabel(idx);
        const legInput = document.querySelector(`#legEditorForm div[id="${idx}"`);        
        // document.querySelector("#legEditorForm").removeChild(legInput);
        legInput.style.display = "none";
        removeLabel(idx);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const nonRemovedLabels = [];

        newLabels.forEach((val, idx) => {
            if(!removedLabels.includes(idx)) {
                nonRemovedLabels.push(val);
            }
        })

        props.setLabels(nonRemovedLabels);

        setRemovedLabels([]);

        document.querySelectorAll("#legEditorForm div").forEach(val => {
            val.style.display = "block";
        })
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
                        const leg = <input onChange={e => handleChange(e)} name={idx} key={idx} value={newLabels[idx]} placeholder={label}></input>;

                        return (
                            <div key={`container${idx}`} id={idx}>
                                <button type="button" onClick={() => removeLeg(idx)} name={`del${idx}`} key={`del${idx}`}>X</button>
                                {leg}
                            </div>
                        );
                     }) 
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LegEditor;