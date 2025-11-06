       function adjustIframe() {
            const iframe = document.getElementById('responsiveIframe');

            if (iframe) {
                // Set iframe size dynamically
                iframe.style.width = `${window.innerWidth}px`;
                iframe.style.height = `${window.innerHeight}px`;

                // Debugging output
                console.log("Iframe resized to:", {
                    width: iframe.style.width,
                    height: iframe.style.height,
                });
            } else {
                console.error("Iframe with ID 'responsiveIframe' not found.");
            }
        }

        // Adjust iframe size on page load
        document.addEventListener('DOMContentLoaded', adjustIframe);

        // Adjust iframe size on window resize
        window.addEventListener('resize', adjustIframe);


document.getElementById('mobile_btn').addEventListener('click', adjustIframe);