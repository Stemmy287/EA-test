import defaultPhoto from '../common/images/defaultPhoto.png';

const getTitle = (desktop: string, tablet: string, mobile: string) => {

	if (window.innerWidth < 1440) {
		return tablet;
	} else if (window.innerWidth < 600) {
		return mobile;
	}
	return desktop;
};

export const DataForEvents = [
	{
		id: 1,
		title: getTitle('Hawaiian party', 'Meeting', 'Custom Home Automation'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 2,
		title: getTitle('Mafia party', 'Meeting', 'Whole Home Audio Solutions'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 3,
		title: getTitle('Party', 'Party', 'Distributed Video'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 4,
		title: getTitle('Party on the Beach', 'Party on the Beach', 'Lighting Control'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 5,
		title: getTitle('Home Security', 'Home Security', 'Home Security'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 6,
		title: getTitle('Network Design & Implementation',
			'Network Design & Implementation',
			'Network Design & Implementation'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 7,
		title: getTitle('System Design & Engineering', 'System Design & Engineering', 'System Design & Engineering'),
		date: '13.02.2023',
		photo: defaultPhoto
	},
	{
		id: 8,
		title: getTitle('Client Care Plans', 'Client Care Plans', 'Client Care Plans'),
		date: '13.02.2023',
		photo: defaultPhoto
	}
];