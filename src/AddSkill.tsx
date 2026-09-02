import { useState, type ReactHTMLElement } from 'react'

//resource: onchange events: https://www.geeksforgeeks.org/reactjs/react-onchange-event/

// handle form submitting from client side
function AddSkill() {

    //makes the field blank to begin with???
    const [selectedSkill, setSelectedSkill] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSkill(event.target.value);
    };

    // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     setSelectedSkill(e.target.value)
    // }

    return (
        <>
        <form>
            <label>
                Add a Skill:
                <select 
                value={selectedSkill}
                onChange={handleChange}
                name="selectedSkill">
                    <option value={""}>SelectOne</option>
                    <option value={"HTML"}>HTML</option>
                    <option value={"CSS"}>CSS</option>
                    <option value={"JavaScript"}>JavaScript</option>
                </select>
            </label>
            <br />
            <p>Skillz: {selectedSkill}</p>
        </form>
        </>
    )
}


export default AddSkill