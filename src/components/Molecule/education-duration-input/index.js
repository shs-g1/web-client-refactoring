// components/Molecule/education-duration-input/index.js

import React from "react";
import AtomPlainInput from "../../Atom/plain-input";

const MoleculeEducationDurationInput = ({ title }) => {
	return (
		<div>
			<p>{title}</p>
			<AtomPlainInput />
			~
			<AtomPlainInput />
		</div >
	)
}

export default MoleculeEducationDurationInput;