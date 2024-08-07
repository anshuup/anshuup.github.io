function highLightHome(){
	document.getElementById("homeMenu").style.color = "#46bddf"
	document.getElementById("homeMenu").style.borderBottomStyle = "solid"
	document.getElementById("experienceMenu").style.color = "white"
	document.getElementById("projectsMenu").style.color = "white"
}
function highLightExp(){
	document.getElementById("experienceMenu").style.color = "#52d273"
	document.getElementById("homeMenu").style.color = "white"
	document.getElementById("projectsMenu").style.color = "white"
	document.getElementById("experienceMenu").style.borderBottomStyle = "solid"
}
function highLightProjects(){
	document.getElementById("projectsMenu").style.color = "#e57255"
	document.getElementById("experienceMenu").style.color = "white"
	document.getElementById("homeMenu").style.color = "white"
	document.getElementById("projectsMenu").style.borderBottomStyle = "solid"

}

function populateSkills(){
	let skills = ["Azure DevOps", "Databricks", "MS SQL Server Studio", "Jira", "Erwin Data Modeler", "HTML/CSS/JavaScript", "Node.js", "Express", "Rest API", "Pug", "JSON Database", "MongoDB", "Mongoose", "C", "C++", "Python", "Java", "SQL", "PostgreSQL", "R", "Minitab", "SAS", "Microsoft 365", "Microsoft Power Platform", "MS Office", "VBA Script", "Batch Files", "Linux", "ShareGate", "SharePoint Designer","PointFire 365"]
	let backColor = ["#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453","#46bddf","#52d273","#e94f64","#e57255","#e5c453"]

	for(i=0;i<skills.length;i++){
		let buttonElem = document.createElement("button")
		buttonElem.className = "button"
		let randomNum = parseInt(Math.random()*7)
		buttonElem.innerHTML = skills[i]
		buttonElem.style.backgroundColor = backColor[i]
		document.getElementById("skillsSection").appendChild(buttonElem)
	}
}

function populateInterest(){
	let interest = ["Games","Movies/Shows","Yoga","Reading","Music"]
	let backColor = ["#e5c453","#46bddf","#52d273","#e94f64","#e57255"]
	for(i=0;i<interest.length;i++){
		let buttonElem = document.createElement("button")
		buttonElem.className = "button"
		let randomNum = parseInt(Math.random()*7)
		buttonElem.innerHTML = interest[i]
		buttonElem.style.backgroundColor = backColor[i]
		document.getElementById("interests").appendChild(buttonElem)
	}
}



function highlightMenuItem(){
	let aboutPos = document.getElementById("aboutInfo");
	let expPos = document.getElementById("expInfo");
	let projectPos = document.getElementById("projectsInfo");

	aboutTop = aboutPos.offsetTop
	expTop = expPos.offsetTop
	projectsTop = projectPos.offsetTop

	if(window.pageYOffset < aboutTop){
		highLightHome()
	}
	if(window.pageYOffset >= aboutTop && window.pageYOffset < expTop){
		highLightAbout()
	}
	if(Math.ceil(window.pageYOffset) >= expTop && window.pageYOffset < projectsTop){
		highLightExp()
	}
	if(window.pageYOffset >= projectsTop){
		highLightProjects()
	}
}
function addProjects(){

	projectNameArray = ["Connect 4", "Tic Tac Toe", "Web Crawling", "Personal Website","Recommender System"]
	projectImageSrcArray = ["./ProjectImages/Connect4Img.PNG","./ProjectImages/TicTacToeImg.PNG","./ProjectImages/webCrawl.png","./ProjectImages/personalWeb.png","./ProjectImages/recommenderSystem.PNG"]
	projectDescArray = ["A web application that allows users to play the game Connect4 with other users of the application",
											"A web application that allows users to play the game TicTacToe game with computer as opponent and other users ",
											"A simple web crawler that was created by visiting incoming and outgoing link of the various pages",
											"Personal website to display more details about my self including projects and work experience",
											"Recommendation system based on various techniques to output choices based on user selecction "]
	projectLinkArray = ["https://github.com/anshuup/connect4-project","https://github.com/anshuup/TicTacToeProject1","https://github.com/anshuup/Web-Crawling","https://github.com/anshuup/anshuup.github.io","https://github.com/anshuup/RecommenderSystem"]
	projectWebArray = ["https://connect-four-game-online.herokuapp.com/","http://tic-tac-toe-gamex.herokuapp.com/","https://github.com/anshuup/Web-Crawling","https://anshuup.github.io/","https://github.com/anshuup/RecommenderSystem"]

	projectSkillsArray = [["HTML/CSS/JavaScript","Node.js","Pug","Exxpres","JSON Database"],["HTML/CSS/JavaScript","Node.js","Express","Rest API"],["JavaScript","RESTful Server","PageRank"],["HTML/CSS/JavaScript"],["User-based Recommendation", "Item-based Recommendation"]]


	for(i=0;i<projectNameArray.length;i++){
		let cardElem = document.createElement("div")
		let projectsImageElem = document.createElement("img")
		let containerElem = document.createElement("div")
		let projHeaderElem = document.createElement("h5")
		let paraElem = document.createElement("p")

		let linkElem = document.createElement("a")

		cardElem.className = "card"
		projectsImageElem.src = projectImageSrcArray[i]
		projectsImageElem.style.width = "100%"
		projectsImageElem.style.height = "185px"
		projectsImageElem.style.marginBottom = "-4px"
		projectsImageElem.style.backgroundColor = "#da6c53"
		containerElem.id = "container"+(i+1)

		let linkDivElem = document.createElement("div")
		linkDivElem.className = "linkDiv"

		let webLink = document.createElement("a")
		webLink.href=projectWebArray[i]
		webLink.innerHTML = "Website"
		webLink.className = "cardLink"
		webLink.style.color = "lightblue"
		webLink.target = "_blank"


		let gitLink = document.createElement("a")
		gitLink.href="#"
		gitLink.innerHTML = "GitHub"
		gitLink.className = "cardLink"
		gitLink.style.color = "lightgreen"
		gitLink.href = projectLinkArray[i]
		gitLink.target = "_blank"

		linkDivElem.appendChild(webLink)
		linkDivElem.appendChild(gitLink)
		linkDivElem.style.height = "35px"
		linkDivElem.style.textAlign = "center"

		let projectInfoElem = document.createElement("div")
		projectInfoElem.className = "projData"

		projHeaderElem.className = "projHeader"
		projHeaderElem.innerHTML = projectNameArray[i]
		projHeaderElem.style.textAlign = "center"


		paraElem.innerHTML =  projectDescArray[i]
		paraElem.className = "projectDescPara"
		paraElem.style.textAlign = "center"

		projectInfoElem.style.minHeight = "145px"
		projectInfoElem.appendChild(projHeaderElem)
		projectInfoElem.appendChild(paraElem)

		linkElem.href = projectLinkArray[i]
		linkElem.target = "_blank"
		linkElem.style.textDecoration = "none"


		document.getElementById("cardsList").appendChild(cardElem)
		cardElem.appendChild(projectsImageElem)
		cardElem.appendChild(containerElem)

		let buttonContainerElem = document.createElement("div")
		buttonContainerElem.className = "buttonContainer"
		buttonContainerElem.style.minHeight = "60px"
		buttonContainerElem.style.textAlign = "center"

		for(j=0;j<projectSkillsArray[i].length;j++){
			let buttonElem = document.createElement("button")
			buttonElem.className = "button"
			buttonElem.innerHTML = projectSkillsArray[i][j]
			buttonContainerElem.appendChild(buttonElem)
		}
		containerElem.appendChild(buttonContainerElem)
		containerElem.appendChild(projectInfoElem)
		containerElem.appendChild(linkDivElem)
	}
}
function myFunction(pageType){
	if(document.getElementById("hamMenuHome").style.display == "grid"){
		document.getElementById("hamMenuHome").style.display = "none"
	}
	else{
		document.getElementById("hamMenuHome").style.display = "grid"

	}

}
var indexNum = 0;
var txt = 'Anshu Patel';
var speed = 250;
function typeWriter() {
	console.log("i ",indexNum)
  if (indexNum < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(indexNum);
    indexNum++;
    setTimeout(typeWriter, speed);
  }
}

function populateWorkExp(){
	workPos = ["IT Technician", "Programmer", "SharePoint/M365 Junior Analyst", "Co-Op Developmental Student"]
	workLocation = ["Canada Border Services Agency (CBSA)- Remote", "Canadian Food Inspection Agency (CFIA) - Remote", "Canadian Food Inspection Agency (CFIA) - Remote", "Ontario Power Generation - Pickering, ON"]
	workPeriod = ["January 2024 - Present", "June 2022 - January 2024", "May 2021 - June 2021", "Jan 2020 - Aug 2020"]
	workTaskList = [["Implemented dashboard in <strong style='color:#e94f64'> Microsoft Azure</strong> to <strong style='color:#e94f64'>monitor</strong> the <strong style='color:#e94f64'>SQL Server Database</strong> and <strong style='color:#e94f64'>Virtual Machine’s</strong> performance by using <strong style='color:#e94f64'>Kusto Query Language (KQL)</strong>", "Worked with <strong style='color:#e94f64'>Azure DevOps</strong> services such as <strong style='color:#e94f64'>Azure Repos, Azure boards</strong> and <strong style='color:#e94f64'>Azure Test Plan</strong> to plan and <strong style='color:#e94f64'>collaborate</strong> on building and deploying applications", "Developed <strong style='color:#e94f64'>source to target mapping</strong> document by analyzing the provided datasets, which helped the team in ensuring <strong style='color:#e94f64'>accurate data transformation</strong>","Utilized <strong style='color:#e94f64'>MS SQL Server Studio<strong> and <strong style='color:#e94f64'>SQL queries<strong> to perform <strong style='color:#e94f64'>data profiling</strong> on the provided dataset which helped in improvising <strong style='color:#e94f64'>data quality</strong>","Worked with <strong style='color:#e94f64'>Erwin Data Modeler</strong> to create and analyze the existing <strong style='color:#e94f64'>data models</strong> to confirm the connectivity between the given model and datasets"],
			["Managed multiple <strong style='color:#e5c453'> SharePoint sites </strong>, including <strong style='color:#e5c453'>workflows</strong> of the site, implemented <strong style='color:#e5c453'>custom script</strong>, and <strong style='color:#e5c453'>resolved</strong> site-related challenges to ensure seamless functionality","Used<strong style='color:#e5c453'> ShareGate </strong> to <strong style='color:#e5c453'> migrate SharePoint on-premises </strong> content to SharePoint Online, ensuring smooth transfer, minimaldisruption, and <strong style='color:#e94f64'>data integrity</strong>","Implemented the <strong style='color:#e5c453'> PointFire multilingual</strong> tool across all organizations sites enahncing <strong style='color:#e5c453'>language accessibility </strong> and <strong style='color:#e5c453'>usability</strong> organization-wide","Developed <strong style='color:#e5c453'>custom apps</strong> using <strong style='color:#e5c453'>PowerApps</strong> and <strong style='color:#e5c453'>Power Automate</strong> to <strong style='color:#e5c453'>automate Microsoft Teams</strong> and <strong style='color:#e5c453'>SharePoint site creation</strong>,<strong style='color:#e5c453'>reducing</strong> manual effort and time for team/site creation and database updates"],
			["Developed a program utilizing <strong style='color:#46bddf'> Rest API </strong> and <strong style='color:#46bddf'> JSOM </strong>  to retrieve the information about sites utilizing  the <strong style='color:#46bddf'> term store, term set and term group </strong> enabling easy access for the tean","Developed and deployed a <strong style='color:#46bddf'>   custom SharePoint Online web part </strong>, combining various Microsoft tools, enhanced with customized <strong style='color:#46bddf'>  CSS </strong> effects for a visually appealing, <strong  style='color:#46bddf'>user interface</strong>","Collaborated with team members and <strong style='color:#46bddf'> developed PowerShell script </strong> to retrieve information on inactive <strong style='color:#46bddf'> Microsoft Teams, </strong> <strong style='color:#46bddf'>reducing  the time complexity</strong> and enabling faster and more streamlined data retrieval"],
			["Developed a program in <strong style='color:#e94f64'> MS Excel VBA </strong> to <strong style='color:#e94f64'> automate </strong> generating and saving document based on yearly schedule, organized them into their designated folders","Developed custom <strong style='color:#e94f64'> SharePoint</strong> page with <strong style='color:#e94f64'> HTML/CSS </strong> integrated <strong style='color:#e94f64'> JavaScript</strong> to retrieve and display data from the list and libraries in carousel and kiosk formats","Implemented the built-in <strong style='color:#e94f64'> app part </strong> and <strong style='color:#e94f64'> web part </strong> to create the links list and archive items list features","Used <strong style='color:#e94f64'> batch script, .vb script </strong> and <strong style='color:#e94f64'> Ms Power Automated </strong> platform to create a pdf printout in OneNote from the OneDrive location automatically everyday at specified time using windows task scheduler"]
			]
	colorList = ["#e5c453","#46bddf","#e94f64", "#e5c453"]

	for(i=0;i<workPos.length;i++){
		let timelineEventElem = document.createElement("li")
		timelineEventElem.className = "timeline-event"

		let timelineEventIconLabel = document.createElement("label")
		timelineEventIconLabel.className = "timeline-event-icon"
		timelineEventIconLabel.id = "icon1"
		timelineEventIconLabel.style.backgroundColor = colorList[i]

		let timelineEventCopy = document.createElement("div")
		timelineEventCopy.className = "timeline-event-copy"

		let timelineEventThumbnail = document.createElement("p")
		timelineEventThumbnail.className = "timeline-event-thumbnail"
		timelineEventThumbnail.id = "thumb"+[i]
		timelineEventThumbnail.innerHTML = workPeriod[i]

		let workHeader = document.createElement("h3")
		workHeader.className = "workHead"
		workHeader.innerHTML = workPos[i]
		workHeader.style.color = colorList[i]

		let workLocHeader = document.createElement("h4")
		workLocHeader.className = "workLocHead"
		workLocHeader.innerHTML = workLocation[i]

		timelineEventElem.appendChild(timelineEventIconLabel)
		timelineEventElem.appendChild(timelineEventCopy)
		timelineEventCopy.appendChild(timelineEventThumbnail)
		timelineEventCopy.appendChild(workHeader)
		timelineEventCopy.appendChild(workLocHeader)

		for(j=0;j<workTaskList[i].length;j++){
			let workTask = document.createElement("p")
			workTask.className = "workTaskInfo"
			workTask.innerHTML = workTaskList[i][j]

			timelineEventCopy.appendChild(workTask)
		}

		document.getElementsByClassName("timeline")[0].appendChild(timelineEventElem)
	}


}
