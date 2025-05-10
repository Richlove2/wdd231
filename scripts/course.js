document.addEventListener('DOMContentLoaded', function() {
    // Course data array
    const courses = [
        { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true, category: "cse" },
        { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true, category: "wdd" },
        { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false, category: "cse" },
        { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false, category: "cse" },
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: false, category: "wdd" },
        { code: "WDD 231", name: "Web Frontend Development", credits: 3, completed: false, category: "wdd" }
    ];

    // DOM elements
    const courseCardsContainer = document.getElementById('course-cards');
    const totalCreditsSpan = document.getElementById('total-credits');
    const filterButtons = document.querySelectorAll('.course-filters button');

    // Display courses
    function displayCourses(filter = 'all') {
        courseCardsContainer.innerHTML = '';
        let filteredCourses = courses;
        
        if (filter !== 'all') {
            filteredCourses = courses.filter(course => course.category === filter);
        }
        
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <h3>${course.code}</h3>
                <p><strong>${course.name}</strong></p>
                <p>Credits: ${course.credits}</p>
                <p class="status">${course.completed ? '✓ Completed' : 'In Progress'}</p>
            `;
            courseCardsContainer.appendChild(card);
        });
        
        // Update total credits
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsSpan.textContent = totalCredits;
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayCourses(this.dataset.filter);
        });
    });

    // Initial display
    displayCourses();
});