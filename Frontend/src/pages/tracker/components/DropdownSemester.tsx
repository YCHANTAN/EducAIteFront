import React from 'react'

interface Props {
    selections: any[]
}

//todo - replace with actual value
const DropdownSemester = ({selections}: Props) => (
    <>
        <select
            // id="dropdown"
            // value={selectedOption}
            // onChange={handleSelectChange}
            className="bg-black text-white border border-white p-2 rounded"
        >
            {selections.map((item, i) => <option value={"option"+i}>{item}</option>)}
        </select>
        {/* {selectedOption && ( */}
            {/* <p>You selected: {selectedOption}</p> */}
        {/* )} */}
    </>
)

export default DropdownSemester