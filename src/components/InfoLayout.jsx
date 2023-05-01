import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const InfoLayout = () => {
	const navigate = useNavigate()

	const onBack = () => navigate(-1)
	const onNext = () => navigate(1)

	return (
		<div>
			<Outlet />
			<div className='buttons'>
				<button className='button' onClick={onBack}>
					Back
				</button>
				<button className='button' onClick={onNext}>
					Next
				</button>
			</div>
		</div>
	)
}

export default InfoLayout
