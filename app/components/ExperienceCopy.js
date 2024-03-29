import leeds from '../media/images/leeds.svg';
import GH from '../media/images/GH.jpg';
import hww from '../media/images/hww.png';
import bluecore from '../media/images/bluecore.png';

// Blank Experience Object Template:
// {
//     no: '',
//     title: '',
//     company: '',
//     location: '',
//     timeframe: '',
//     overview: '',
//     details: '',
//     logo: '',
//     job: '',
// },

const experienceDetails = [
	{
		no: 1,
		title: 'Forward Deployed Engineer',
		company: 'Bluecore',
		location: 'New York, NY',
		timeframe: '2021\u2013now',
		overview:
			"Supporting Bluecore's retail clients by writing code to manage bidirectional data transfer of customer activity and product information. Solving unique technical problems and implementing solutions to help clients maximize their marketing programs.",
		details:
			'Writing and enhancing JavaScript integrations that run on client websites. Configuring and maintaining data streams between Bluecore and clients via integrated scripts, SFTP transfer and Google Cloud functions. Scoping and implementing client requests and problem solving to enable new ways of using the Bluecore platform. Working directly with non-technical and technical client teams to overcome technical challenges. Developing internal utils and working on internal pilot programs. Carrying out technical interviews with prospective new hires',
		logo: bluecore,
		job: true,
	},
	{
		no: 2,
		title: 'Software Engineering Fellow',
		company: 'The Grace Hopper Program at Fullstack Academy',
		location: 'New York, NY',
		timeframe: '2020\u20132021',
		overview:
			'Worked as a mentor and teaching assistant for a cohort of Grace Hopper students.',
		details:
			"Leading lectures on algorithm solving approaches for 40 students. Acting as a project manager for students' group projects using agile methodology, leading daily standups and ensuring project boards are kept up to date. Conducting interviews with potential students in JavaScript and Python. Providing one-on-one support and feedback on individual take-home coding assessments, giving live coding explanations. Assisting students with workshops and coding problems",
		logo: GH,
		job: true,
	},
	{
		no: 3,
		title: 'Software Engineer in Training',
		company: 'The Grace Hopper Program at Fullstack Academy',
		location: 'New York, NY',
		timeframe: '2020\u20132020',
		overview:
			"Attended The Grace Hopper Program's immersive 17-week coding bootcamp, focused on the fundamentals of fullstack web development.",
		details:
			'Earned a certificate of completion for successfully completing 553 hours of software development training',
		logo: GH,
		job: false,
	},
	{
		no: 4,
		title: 'Project Manager',
		company: 'Freedman International',
		location: 'New York, NY',
		timeframe: '2018\u20132020',
		overview:
			'Acted as the most senior member of the New York project management team, producing global marketing campaigns and training material. Allocated work and divided project tasks amongst the team whilst tracking overall progress and profit margins and ensuring a high quality of deliverables.',
		details:
			"Managed localization of an extensive training program into 12 languages, including hours of videos with voice over requirements featuring 13 characters, HTML and JavaScript-based eLearning materials and multiple InDesign files comprising of 100's of pages. Led localization and testing of online content with localization engineers and developer teams based in London as well as a global network of linguists, for languages including Arabic, Thai, Japanese and Russian. Led consultancy projects for design teams on potential risks and issues when localizing proposed new taglines and marketing campaigns, providing targeted feedback for over 20 markets. Produced all quotes and proposals for large-scale campaigns within the team, proactively finding cost saving solutions, multi-tiered approaches and accelerated timelines to meet clients' needs",
		logo:
			'https://media-exp1.licdn.com/dms/image/C560BAQEdEDxu3pJZ2Q/company-logo_200_200/0/1519856070064?e=2159024400&v=beta&t=WwV-LyXiPikc5bz18_pHmO3ApEnnNcP_HERcH3JtNes',
		job: true,
	},
	{
		no: 5,
		title: 'Transcreation Account Manager',
		company: 'Hogarth Worldwide',
		location: 'New York, NY',
		timeframe: '2017\u20132018',
		overview:
			'Worked as a senior member of the Transcreation team, taking ownership of multiple high-profile client accounts and relationships. Managed a range of end-to-end localization and production projects across all media, partnering with a network of global and local production agencies to launch campaigns.',
		details:
			'Project managed both external and internal studios, carried out localization, testing and problem resolution of broadcast, digital and print assets. Took briefs, created project plans and timelines, managed all scope changes and ensured deadlines were met. Proactively managed fast-paced projects with challenging timelines, finding creative solutions to challenges while maintaining a consistent profit margin. Successfully onboarded a top Fortune 500 beauty company, managing localization and deployment of their rebranding campaign across all platforms',
		logo: hww,
		job: true,
	},
	{
		no: 6,
		title: 'Account Team (Various Roles)',
		company: 'Freedman International',
		location: 'London, England',
		timeframe: '2011\u20132016',
		overview:
			'Coordinated localization and implementation of marketing campaigns and collateral across all channels for multimillion-dollar client accounts. Oversaw campaign work across a global team of 10+ people as well as multiple studio teams, acting as a central point of contact for clients and agencies.',
		details:
			"Created and implemented quoting templates across multiple client accounts, standardizing the process and introducing time efficiencies. Scoped and quoted new campaigns and projects of up to $250,000 each month, ensuring adherence to budget at all stages of projects. Trained over 15 junior team members, with a particular emphasis on quality control. Delegated and oversaw junior team members’ work, acted as an escalation point for any issues and ensured all deadlines were met with a high standard of deliverables. Oversaw the set up and maintenance of an online client content management site containing over 15,000 assets; dealt with any client queries and generated reports on site usage. Acted as the UK English brand ambassador for a FTSE 100 company at the client's request due to proven subject matter expertise",
		logo:
			'https://media-exp1.licdn.com/dms/image/C560BAQEdEDxu3pJZ2Q/company-logo_200_200/0/1519856070064?e=2159024400&v=beta&t=WwV-LyXiPikc5bz18_pHmO3ApEnnNcP_HERcH3JtNes',
		job: true,
	},
	{
		no: 7,
		title: 'BA in German and Italian',
		company: 'University of Leeds',
		location: 'Leeds, England',
		timeframe: '2008\u20132011',
		overview: '',
		details:
			'Received a 2:1 (Hons) degree. Studied abroad in Verona, Italy for one year and Munich, Germany for four months',
		logo: leeds,
		job: false,
	},
];

export default experienceDetails;
