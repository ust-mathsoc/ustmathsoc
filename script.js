const projects = [
    {
        title: "Recruitment 101",
        type: "Recruitment Fair",
        description: "Recruitment 101 is an annual Thomasian event that aims to recruit members and officers of the Executive Team while promoting the mission and vision of student organizations.",
        date: "September 21-25 (Online), September 28- October 2, 2026"
    },
    {
        title: "General Assembly 1",
        type: "General Assembly",
        description: "General Assembly is a gathering that welcomes new and returning members, introduces the organization’s structure, purpose, and goals, and fosters camaraderie within the MathSoc community.",
        date: "October 23, 2026"
    },
    {
        title: "Byte by Byte 3.0: Unlocking Digital Proficiency Literacy",
        type: "Community Development (Collab with DSA)",
        description: "Byte by Byte 3.0 is a community development initiative in collaboration with the UST Data Science and Analytics Society that equips participants with essential digital skills for academic, professional, and everyday use.",
        date: "Phase 1: September 2026 | Phase 2: November 16-21, 2026"
    },
    {
        title: "₱era-₱araan 4.0: A Seminar on Financial Literacy",
        type: "Seminar (Collab with DSA)",
        description: "₱era-₱araan 4.0 is a seminar featuring industry professionals that explores the applications of mathematics and data science in investing, finance, and financial decision-making.",
        date: "December 4, 2026"
    },
    {
        title: "LIMITLESS 10.0: The UST Mathematical Society Leadership Training Seminar",
        type: "Teambuilding (Collab with DSA & AP)",
        description: "LIMITLESS, now on its 10th year, is the UST Mathematical Society's annual leadership training seminar. Like the previous year, this year's Limitless will be held in collaboration with APSoc and DSASoc.",
        date: "January 2027"
    },
    {
        title: "Face The Math Challenge 2027",
        type: "Competition",
        description: "Face The Math Challenge 2027 is an intercollegiate quiz bee contest, which aims to promote critical thinking and mathematical problem-solving.",
        date: "February 2027"
    },
    {
        title: "Mathematical Workshop",
        type: "Workshop",
        description: "A skills-based workshop designed to equip students with practical mathematical and analytical tools relevant to academics, internships, and future careers.",
        date: "March 2027"
    },
    {
        title: "Gift to Grow 2.0",
        type: "Community Development",
        description: "Gift to Grow 2.0 is a year-round service-learning initiative headed by DSASoc that features an extended donation drive followed by a hands-on workshop where participants organize and prepare donated items for distribution to a partner community.",
        date: "April 2027"
    },
    {
        title: "General Assembly 2",
        type: "General Assembly",
        description: "General Assembly 2 aims to disseminate proposed amendments to the organization's Articles of Association, including the change in the organization's logo.",
        date: "April 2027"
    },
    {
        title: "Year-End Event",
        type: "Year-End",
        description: "An event that provides a meaningful space for its members through reflecting, celebrating, and reconnecting with the current and graduating members of the organization.",
        date: "May 2027"
    }
];

const initiatives = [
    {
        title: "ActuRated!: Beyond the Equations",
        type: "Social Media Post",
        description: "ActuRated!: Beyond the Equations is a video series that introduces students to Actuarial Science, covering its academic pathway, professional exams, career opportunities, and the role of the UST Mathematical Society in supporting students throughout their journey.",
        date: "Oct - Dec 2026"
    },
    {
        title: "Freshie Week Activities",
        type: "Orientation",
        description: "Activities designed to welcome and orient incoming students to the MathSoc community.",
        date: "August 2026"
    },
    {
        title: "Digital Library",
        type: "Academic Resource",
        description: "An academic resource initiative designed to make useful learning materials more accessible to students.",
        date: "August 2026"
    },
    {
        title: "Actuarial Survival Kit",
        type: "Website",
        description: "A student-centered resource designed to help students navigate the Actuarial Science program and their university experience.",
        date: "September 2026"
    },
    {
        title: "MathSoc Website",
        type: "Website",
        description: "The official online platform of the UST Mathematical Society, providing students with access to organizational information, projects, initiatives, and opportunities.",
        date: "September 2026"
    },
    {
        title: "Voice Network: Five-Layered Grievance System",
        type: "Grievances",
        description: "A structured system intended to provide students with channels for communicating concerns and grievances.",
        date: "August 2026"
    },
    {
        title: "ASK MathSoc",
        type: "Tutoring Service",
        description: "A tutoring service developed to provide students with additional academic support.",
        date: "September 2026"
    },
    {
        title: "MathSoc CoCreate",
        type: "Project Management",
        description: "A collaborative initiative focused on developing ideas and projects within the organization.",
        date: "September 2026"
    },
    {
        title: "Alumni Relations Database",
        type: "Database",
        description: "A database initiative designed to strengthen MathSoc's connection with its alumni.",
        date: "October 2026"
    },
    {
        title: "Project R&R: Reflection & Recreation",
        type: "TWA Hangout",
        description: "A community-building activity focused on reflection, recreation, and strengthening relationships among members.",
        date: "October 2026 & March 2027"
    },
    {
        title: "MathSoc Merchandise",
        type: "Merchandise",
        description: "Official merchandise designed to strengthen MathSoc identity and community spirit.",
        date: "November 2026–February 2027"
    },
    {
        title: "The Constant Digital Campaign",
        type: "Social Media",
        description: "A continuous digital campaign throughout the academic year.",
        date: "Throughout AY 2026–2027"
    }
];

function createCard(item) {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-type">${item.type}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="project-meta">${item.date}</div>
    `;

    return card;
}

function renderList(items, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = "";
    items.forEach(item => {
        container.appendChild(createCard(item));
    });
}

function getEventEndDate(dateText) {
    const months = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    const yearMatch = dateText.match(/20\d{2}/);
    const year = yearMatch ? parseInt(yearMatch[0], 10) : new Date().getFullYear();

    const monthMatches = dateText.match(/January|February|March|April|May|June|July|August|September|October|November|December/g);
    if (!monthMatches) return null;

    // Use the last month mentioned in multi-range dates (e.g., September 28 - October 2)
    const lastMonthName = monthMatches[monthMatches.length - 1];
    const monthIndex = months[lastMonthName];

    // Check for explicit day numbers after the last month name
    const afterLastMonth = dateText.substring(dateText.lastIndexOf(lastMonthName));
    const dayMatches = afterLastMonth.match(/\d+/g);

    let day = 31; // Default to end of month
    if (dayMatches) {
        const days = dayMatches.map(Number).filter(d => d <= 31);
        if (days.length > 0) {
            day = days[days.length - 1]; // Pick the final end day number
        }
    }

    // Set end date to 23:59:59 of that target day
    return new Date(year, monthIndex, day, 23, 59, 59);
}

function updateFeaturedEvent() {
    const featuredTerm = document.getElementById("featuredTerm");
    const featuredTitle = document.getElementById("featuredTitle");
    const featuredDescription = document.getElementById("featuredDescription");
    const featuredDate = document.getElementById("featuredDate");

    if (!featuredTerm || !featuredTitle || !featuredDescription || !featuredDate) return;

    const today = new Date();

    // Select the first chronological project whose end date has not passed yet
    const currentOrUpcomingEvent = projects.find(project => {
        const endDate = getEventEndDate(project.date);
        return endDate && endDate >= today;
    }) || projects[0];

    featuredTerm.textContent = currentOrUpcomingEvent.type;
    featuredTitle.textContent = currentOrUpcomingEvent.title;
    featuredDescription.textContent = currentOrUpcomingEvent.description;
    featuredDate.textContent = currentOrUpcomingEvent.date;
}

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks) {
                navLinks.classList.remove("active");
            }
        });
    });

    renderList(projects, "projectList");
    renderList(initiatives, "initiativeList");
    updateFeaturedEvent();
});