document.addEventListener('DOMContentLoaded', () => {
    loadAssignments();

    document.getElementById('upload-form').addEventListener('submit', handleUpload);
});

function loadAssignments() {
    const list = document.getElementById('assignments-list');
    const assignments = store.getAssignments();

    if (assignments.length === 0) {
        list.innerHTML = `<div class="glass-panel"><p class="text-center">No assignments found. Enjoy your free time!</p></div>`;
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
                ${assignment.type === 'Group' ? `<p><strong>Max Members:</strong> ${assignment.maxMembers}</p>` : ''}
                
                <h4 class="mt-4 mb-2">Rules:</h4>
                <div class="rules-list">${assignment.rules.replace(/\n/g, '<br>')}</div>

                ${assignment.templateName ? `<div class="mt-4"><a href="#" class="btn btn-outline" style="font-size: 0.875rem" onclick="alert('Template download simulated!')">⬇️ Download Template: ${assignment.templateName}</a></div>` : ''}
                
                <h4 class="mt-4 mb-2">Your Submissions:</h4>
                ${renderSubmissions(assignment.id)}
            </div>
            <div class="card-footer">
                <button class="btn btn-primary" onclick="openModal('${assignment.id}')">Upload Report</button>
            </div>
        </div>
    `).join('');
}

function renderSubmissions(assignmentId) {
    const submissions = store.getSubmissionsForAssignment(assignmentId);
    if (submissions.length === 0) return '<p style="font-size: 0.875rem">No submissions yet.</p>';

    return submissions.map(sub => `
        <div style="background: rgba(0,0,0,0.2); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; font-size: 0.875rem;">
            <div><strong>Status:</strong> <span class="${sub.status === 'Correct' ? 'text-success' : (sub.status === 'Reiterate' ? 'text-danger' : 'text-warning')}">${sub.status}</span></div>
            ${sub.feedback ? `<div><strong>Feedback:</strong> ${sub.feedback}</div>` : ''}
            <div style="color: var(--text-secondary); font-size: 0.75rem;">Submitted on: ${new Date(sub.submittedAt).toLocaleString()}</div>
        </div>
    `).join('');
}

function openModal(assignmentId) {
    document.getElementById('assignment-id').value = assignmentId;
    document.getElementById('upload-form').reset();
    document.getElementById('upload-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('upload-modal').classList.add('hidden');
}

function handleUpload(e) {
    e.preventDefault();
    
    const assignmentId = document.getElementById('assignment-id').value;
    const names = document.getElementById('student-name').value;
    const usns = document.getElementById('student-usn').value;
    const fileInput = document.getElementById('report-file');
    
    if (!fileInput.files.length) return;

    store.addSubmission({
        assignmentId,
        studentNames: names,
        usns: usns,
        fileName: fileInput.files[0].name
    });

    closeModal();
    showToast('Report submitted successfully!');
    loadAssignments();
}
