document.addEventListener('DOMContentLoaded', () => {
    loadFacultyAssignments();

    document.getElementById('create-form').addEventListener('submit', handleCreateAssignment);
    document.getElementById('review-form').addEventListener('submit', handleReviewSubmit);
});

function loadFacultyAssignments() {
    const list = document.getElementById('faculty-assignments-list');
    const assignments = store.getAssignments();

    if (assignments.length === 0) {
        list.innerHTML = `<div class="glass-panel" style="grid-column: 1 / -1;"><p class="text-center">No assignments created yet. Click "Create Assignment" to start.</p></div>`;
        return;
    }

    list.innerHTML = assignments.map(assignment => `
        <div class="glass-panel card">
            <div class="card-header">
                <h3>${assignment.subject}</h3>
                <span class="badge ${assignment.type === 'Group' ? 'badge-warning' : 'badge-info'}">${assignment.type}</span>
            </div>
            <div class="card-body">
                <p><strong>Deadline:</strong> ${new Date(assignment.deadline).toLocaleDateString()}</p>
                <div style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                    <h4>Submissions</h4>
                    ${renderFacultySubmissions(assignment.id)}
                </div>
            </div>
        </div>
    `).join('');
}

function renderFacultySubmissions(assignmentId) {
    const submissions = store.getSubmissionsForAssignment(assignmentId);
    
    if (submissions.length === 0) {
        return '<p style="color: var(--text-secondary); font-size: 0.875rem;">No submissions yet.</p>';
    }

    return submissions.map(sub => `
        <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
            <p style="margin-bottom: 0.25rem;"><strong>Students:</strong> ${sub.studentNames}</p>
            <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><strong>USN:</strong> ${sub.usns}</p>
            <p style="margin-bottom: 0.5rem; font-size: 0.875rem;"><a href="#" onclick="alert('Simulated file download: ${sub.fileName}')">📄 ${sub.fileName}</a></p>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                <span class="badge ${sub.status === 'Correct' ? 'badge-success' : (sub.status === 'Reiterate' ? 'badge-warning' : 'badge-info')}">${sub.status}</span>
                <button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" onclick="openReviewModal('${sub.id}')">Review</button>
            </div>
        </div>
    `).join('');
}

// Create Assignment Logic
function toggleGroupMembers() {
    const type = document.getElementById('assignment-type').value;
    const groupMembersDiv = document.getElementById('max-members-group');
    if (type === 'Group') {
        groupMembersDiv.classList.remove('hidden');
    } else {
        groupMembersDiv.classList.add('hidden');
    }
}

function openCreateModal() {
    document.getElementById('create-form').reset();
    toggleGroupMembers();
    document.getElementById('create-modal').classList.remove('hidden');
}

function closeCreateModal() {
    document.getElementById('create-modal').classList.add('hidden');
}

function handleCreateAssignment(e) {
    e.preventDefault();
    
    const subject = document.getElementById('subject').value;
    const rules = document.getElementById('rules').value;
    const type = document.getElementById('assignment-type').value;
    const maxMembers = document.getElementById('max-members').value;
    const deadline = document.getElementById('deadline').value;
    const templateFile = document.getElementById('template-file').files[0];

    store.addAssignment({
        subject,
        rules,
        type,
        maxMembers: type === 'Group' ? maxMembers : 1,
        deadline,
        templateName: templateFile ? templateFile.name : null
    });

    closeCreateModal();
    showToast('Assignment created successfully!');
    loadFacultyAssignments();
}

// Review Logic
function openReviewModal(submissionId) {
    document.getElementById('review-submission-id').value = submissionId;
    document.getElementById('review-form').reset();
    document.getElementById('review-modal').classList.remove('hidden');
}

function closeReviewModal() {
    document.getElementById('review-modal').classList.add('hidden');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    
    const submissionId = document.getElementById('review-submission-id').value;
    const status = document.getElementById('review-status').value;
    const feedback = document.getElementById('review-feedback').value;

    store.updateSubmission(submissionId, status, feedback);

    closeReviewModal();
    showToast('Review submitted successfully!');
    loadFacultyAssignments();
}
