// components/Molecule/education-list-input/index.js

import React from "react";
import AtomPlainInput from "../../Atom/plain-input";

// title = 경력
const MoleculeEduactionListInput = ({ title }) => {
	return (
		<div>
			<p>{title}</p>
			<AtomPlainInput placeholder={'학교'} />
			<AtomPlainInput placeholder={'학과'} />
		</div >
	)
}

export default MoleculeEduactionListInput;