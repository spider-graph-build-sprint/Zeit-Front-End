import React, { useState, useEffect } from "react";

const LegEditor = props => {
    const [visible, setVisible] = useState(false);
    const [myForm, setMyForm] = useState(<></>);
    // const [newLabels, setNewLabels] = useState(props.labels);
    const [newLabels, setNewLabels] = useState([]);
    
    //initialize keys in newLabels to correspond to indices in props.labels
    // for(let i = 0; i < props.labels.length; i++) {
    //     setNewLabels({...newLabels, i: ""});
    // }

    const handleChange = e => {
        const newLabelsCopy = [...newLabels];
        newLabelsCopy[e.target.name] = e.target.value;
        setNewLabels([...newLabelsCopy]);
        // {newLabelsCopy,[e.target.name]: e.target.value;}
        // console.log(newLabelsCopy);
        // if(newLabels[e.target.name])
        console.log(newLabels)
        // setNewLabels({...newLabels, [e.target.name]: e.target.value});
        // console.log(e.target.name, e.target.value);
        // console.log("newLabelsCopy: ", newLabelsCopy);
        // console.log("newLabels: ", newLabels);
        // console.log(`e.target.name=${e.target.name}, e.target.value=${e.target.value}`);
        // return setNewLabels([...newLabelsCopy]);
    }

    // const updateForm = () => {
        // setVisible(!visible);

    //     if(visible) {
    //         // const inputs = props.labels.map(label => {
    //         //     return <input 
    //         // })

    //         setMyForm (
    //             <form>
    //                 {
    //                     props.labels.map((label, idx) => {
    //                         return <input onChange={handleChange} name={idx} key={idx} value={newLabels[idx]} placeholder={label}></input>
    //                     })
    //                 }
    //             </form>
    //         );
    //     } else {
    //         setMyForm(<></>);
    //     }
    // }

    useEffect(() => {
        setNewLabels(props.labels);
    },[props.labels])

    return (
        <div className="legEditor">
            {/* <button onClick={() => updateForm()}>Edit leg names</button> */}
            <button onClick={() => {setVisible(!visible);}}>Edit leg names</button>
            {/* {myForm} */}
                 <form>
                     {
                        newLabels.map((label, idx) => {
                            return <input onChange={e => handleChange(e)} name={idx} key={idx} 
                                value={newLabels[idx]} placeholder={label}></input>
                        })
                    }
                </form>
        </div>
    );
}

export default LegEditor;