// components/Molecule/pb-portfolio-list/index.js
// 모달을 위한 컴포넌트
import { useState } from "react";
import AtomPBPortfolioTable from "../../Atom/pb-portfolio-table";
import MoleculePBPortfolioModal from "../pb-portfolio-modal";

const MoleculePBPortfolioList = (props) => {

	const [selectedRow, setSelectedRow] = useState(null);

	const handleRowClick = (data, index) => {
		setSelectedRow({ data, index });
	};


	// console.log(props.portfolioList); //	여기까지 잘 들어옴
	return (
		<div>
			<AtomPBPortfolioTable
				title={props.title}
				content={props.portfolioList}
				onRowClick={handleRowClick}
			/>
			{selectedRow && (
				<MoleculePBPortfolioModal
					rowData={selectedRow.index}
					onClose={() => setSelectedRow(null)}
				/>
			)}
		</div>
	);
};

export default MoleculePBPortfolioList;