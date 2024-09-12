document.addEventListener("DOMContentLoaded", () => {
    // Navigation Tile Clicks
    document.querySelectorAll('.tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const id = tile.id;
            if (id === 'job-search') {
                window.location.href = 'job-search.html';
            } else if (id === 'ats-system') {
                window.location.href = 'ats-system.html';
            } else if (id === 'skill-roadmap') {
                window.location.href = 'skill-roadmap.html';
            }
        });
    });

    // Job Search Page: Search Jobs Button
    const searchJobsBtn = document.getElementById('search-jobs');
    if (searchJobsBtn) {
        searchJobsBtn.addEventListener('click', () => {
            alert('Search functionality not implemented yet.');
            // Here you can add logic to perform an actual job search
        });
    }

    // File Uploads: Handle drag and drop
    const fileUploads = document.querySelectorAll('.file-upload');
    fileUploads.forEach(upload => {
        const input = upload.querySelector('input[type="file"]');

        upload.addEventListener('dragover', (event) => {
            event.preventDefault();
            upload.classList.add('dragging');
        });

        upload.addEventListener('dragleave', () => {
            upload.classList.remove('dragging');
        });

        upload.addEventListener('drop', (event) => {
            event.preventDefault();
            upload.classList.remove('dragging');
            const files = event.dataTransfer.files;
            handleFileUpload(files);
        });

        input.addEventListener('change', (event) => {
            const files = event.target.files;
            handleFileUpload(files);
        });
    });

    // Function to handle file upload
    function handleFileUpload(files) {
        if (files.length > 0) {
            console.log('Files selected or dropped:', files);
            alert('File upload functionality is not implemented yet.');
            // Here you can add logic to upload the files to the server
        } else {
            console.log('No files selected.');
        }
    }

    // Skill Roadmap Page: Search Job Role Input
    const searchJobRoleInput = document.getElementById('career-goal');
    if (searchJobRoleInput) {
        searchJobRoleInput.addEventListener('input', (event) => {
            const value = event.target.value;
            console.log('Search Job Role:', value);
            // Implement search logic if needed
        });
    }

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Additional interactivity: Show alert on login button click
    const loginButton = document.querySelector('.btn');
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            alert('Login functionality not implemented yet.');
            // Here you can add logic to handle the login process
        });
    }
});
``











