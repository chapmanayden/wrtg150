function nextStep(stepId) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    for (let step of steps) {
        step.style.display = 'none';
    }

    // Show the specified step
    document.getElementById(stepId).style.display = 'block';
}
