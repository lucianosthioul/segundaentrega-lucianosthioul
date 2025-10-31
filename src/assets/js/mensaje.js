// Configuración del formulario
        const contactForm = document.getElementById('contactForm');
        const messageStatus = document.getElementById('messageStatus');
        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const submitIcon = document.getElementById('submitIcon');

        // Simulación de envío
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            setSubmitState(true);
            
            // Simular delay de envío
            setTimeout(() => {
                showMessage('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
                contactForm.reset();
                setSubmitState(false);
            }, 2000);
        });

        function setSubmitState(loading) {
            if (loading) {
                submitBtn.disabled = true;
                submitText.textContent = 'Enviando...';
                submitIcon.className = 'fas fa-spinner fa-spin ml-2';
            } else {
                submitBtn.disabled = false;
                submitText.textContent = 'Enviar Mensaje';
                submitIcon.className = 'fas fa-paper-plane ml-2';
            }
        }

        function showMessage(text, type) {
            messageStatus.className = `mb-6 p-4 rounded-lg text-center ${
                type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
            }`;
            messageStatus.textContent = text;
            messageStatus.classList.remove('hidden');
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                messageStatus.classList.add('hidden');
            }, 5000);
        }

