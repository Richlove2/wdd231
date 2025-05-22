// Fetch and display members
async function getMembers() {
    try {
        const response = await fetch('/wdd230/chamber/data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching member data:', error);
        document.getElementById('member-container').innerHTML = 
            '<p>Error loading member data. Please try again later.</p>';
    }
}

function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = '';
    
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        let membershipLevel;
        switch(member.membershipLevel) {
            case 1: membershipLevel = "Member"; break;
            case 2: membershipLevel = "Silver Member"; break;
            case 3: membershipLevel = "Gold Member"; break;
            default: membershipLevel = "Member";
        }
        
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">Visit Site</a></p>
            <p class="membership-level"><strong>${membershipLevel}</strong></p>
            <p>${member.otherInfo}</p>
        `;
        
        container.appendChild(memberCard);
    });
}

// View toggle functionality
document.getElementById('grid-view').addEventListener('click', () => {
    const container = document.getElementById('member-container');
    container.classList.remove('list-view');
    container.classList.add('grid-view');
    document.getElementById('grid-view').disabled = true;
    document.getElementById('list-view').disabled = false;
});

document.getElementById('list-view').addEventListener('click', () => {
    const container = document.getElementById('member-container');
    container.classList.remove('grid-view');
    container.classList.add('list-view');
    document.getElementById('list-view').disabled = true;
    document.getElementById('grid-view').disabled = false;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    getMembers();
    document.getElementById('list-view').disabled = true; // Start with grid view active
});
