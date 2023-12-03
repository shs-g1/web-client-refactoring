// components/Organism/pb-portfolio-list/index.js

import { useState, useEffect } from "react";
import AtomPBPortfolioTable from "../../Atom/pb-portfolio-table";

const MoleculePBPortfolioList = () => {

	const [portfolioListData, setPortfolioListData] = useState({
		portfolioNames: ['자문사 펀드1', '자문사 펀드2', '자문사 펀드3'],	// 이름
		principals: [1000000, 1000000, 1000000],	// 투자원금
		returns: [1602346, 1602346, 1602346],	// 투자수익
		MDDs: [-11, -11, -11],	// MDD , fetch 안 함
		cumulativeRORs: [1025.25, 1025.25, 200],	// 누적수익률
		durations: ['2013.10.11~2023.05.23', '2013.10.11~2023.05.23', '2013.10.11~2023.05.23']	// 기간
	});

	useEffect(() => {
		// TODO: fetch로 포트폴리오 리스트 불러오기
	}, []);

	return (
		<div>
			<AtomPBPortfolioTable title="포트폴리오" content={portfolioListData} />
		</div>
	);
};

export default MoleculePBPortfolioList;