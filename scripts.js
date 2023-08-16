var stepHistory = []; // Array to hold steps user has visited

function proceed(stepId) {
    // Get the current active step
    var activeStep = document.querySelector('.step.active');

    // If there's an active step, add its ID to the history
    if (activeStep) {
        stepHistory.push(activeStep.id);
    }

    // Hide all steps
    var steps = document.querySelectorAll('.step');
    for (var i = 0; i < steps.length; i++) {
        steps[i].classList.remove('active');
    }
    // Show the desired step
    document.getElementById(stepId).classList.add('active');
}

function goBack() {
    if (stepHistory.length > 0) {
        // Hide all steps
        var steps = document.querySelectorAll('.step');
        for (var i = 0; i < steps.length; i++) {
            steps[i].classList.remove('active');
        }
        
        // Get the last step from the history and display it
        var lastStepId = stepHistory.pop();
        document.getElementById(lastStepId).classList.add('active');
    }
}
