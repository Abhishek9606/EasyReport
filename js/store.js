// Mock Store using LocalStorage
class Store {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem('assignments')) {
            localStorage.setItem('assignments', JSON.stringify([]));
        }
        if (!localStorage.getItem('submissions')) {
            localStorage.setItem('submissions', JSON.stringify([]));
        }
    }

    // --- Assignments (Faculty creates, Student views) ---
    getAssignments() {
        return JSON.parse(localStorage.getItem('assignments')) || [];
    }

    addAssignment(assignment) {
        const assignments = this.getAssignments();
        const newAssignment = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            ...assignment
        };
        assignments.push(newAssignment);
        localStorage.setItem('assignments', JSON.stringify(assignments));
        return newAssignment;
    }

    // --- Submissions (Student creates, Faculty reviews) ---
    getSubmissions() {
        return JSON.parse(localStorage.getItem('submissions')) || [];
    }

    getSubmissionsForAssignment(assignmentId) {
        return this.getSubmissions().filter(sub => sub.assignmentId === assignmentId);
    }

    addSubmission(submission) {
        const submissions = this.getSubmissions();
        const newSubmission = {
            id: Date.now().toString(),
            submittedAt: new Date().toISOString(),
            status: 'Pending', // Pending, Correct, Reiterate
            feedback: '',
            ...submission
        };
        submissions.push(newSubmission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        return newSubmission;
    }

    updateSubmission(submissionId, status, feedback) {
        const submissions = this.getSubmissions();
        const index = submissions.findIndex(sub => sub.id === submissionId);
        if (index !== -1) {
            submissions[index].status = status;
            submissions[index].feedback = feedback;
            localStorage.setItem('submissions', JSON.stringify(submissions));
            return true;
        }
        return false;
    }
}

const store = new Store();

// Utility for showing Toast/Notifications (simple alert for MVP, or custom UI)
function showToast(message) {
    alert(message); // Kept simple for MVP, can be upgraded to custom UI if needed
}
