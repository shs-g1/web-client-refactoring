// component/Atom/search-input/index.js

import React, { useState } from "react";

const AtomSearchInput = ({ label, placeholder, onSelect, options }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState('');

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleSelect = (item) => {
		setSelectedItem(item);
		onSelect(item);
		closeModal();
	};

	return (
		<div>
			<label>{label}</label>
			<input
				type="text"
				placeholder={placeholder}
				value={selectedItem}
				onClick={openModal}
				readOnly
			/>

			{/* <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
				{/* 모달 내용: 검색 기능 및 리스트 렌더링 */}
			{options.map((option) => (
				<div key={option.id} onClick={() => handleSelect(option)}>
					{option.name}
				</div>
			))}
		</Modal> * /}
		</div >
	);
};

export default AtomSearchInput;