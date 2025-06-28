
        function showCategory(categoryName) {
            // Hide all category sections
            const allSections = document.querySelectorAll('.category-section');
            allSections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all buttons
            const allButtons = document.querySelectorAll('.category-btn');
            allButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Show selected category
            document.getElementById(categoryName).classList.add('active');

            // Add active class to clicked button
            event.target.classList.add('active');

            // Close all open answers
            const allAnswers = document.querySelectorAll('.question-answer');
            allAnswers.forEach(answer => {
                answer.classList.remove('open');
            });

            const allIcons = document.querySelectorAll('.question-icon');
            allIcons.forEach(icon => {
                icon.textContent = '+';
                icon.style.transform = 'rotate(0deg)';
            });
        }

        function toggleAnswer(headerElement) {
            const answer = headerElement.nextElementSibling;
            const icon = headerElement.querySelector('.question-icon');
            const isOpen = answer.classList.contains('open');

        // Close all other answers in the current section
            const currentSection = headerElement.closest('.category-section');
            const allAnswersInSection = currentSection.querySelectorAll('.question-answer');
            const allIconsInSection = currentSection.querySelectorAll('.question-icon');

            allAnswersInSection.forEach(ans => {
                ans.classList.remove('open');
            });

            allIconsInSection.forEach(ic => {
                ic.textContent = '+';
                ic.style.transform = 'rotate(0deg)';
            });

            // Toggle the clicked answer
            if (!isOpen) {
                answer.classList.add('open');
                icon.textContent = '−';
                icon.style.transform = 'rotate(180deg)';
            }
        }

    
       
  

