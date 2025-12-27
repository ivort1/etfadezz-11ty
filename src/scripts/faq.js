// public/js/faq.js
export class FAQClient {
    constructor(rootElement = document) {
        this.root = rootElement;
    }

    init() {
        const faqSections = this.root.querySelectorAll('[data-component="faq"]');
        if (faqSections.length === 0) {
            console.log('No FAQ components found on this page');
            return;
        }

        faqSections.forEach(section => {
            this.enhanceSection(section);
        });

        this.handleDeepLinking();
        console.log('✓ FAQ components enhanced');
    }

    enhanceSection(section) {
        const detailsElements = section.querySelectorAll('details.faq-item');
        
        detailsElements.forEach(details => {
            details.classList.add('faq-item--enhanced');
            details.addEventListener('toggle', (e) => {
                this.handleToggle(e);
            });
        });
    }

    handleToggle(event) {
        const details = event.target;
        
        if (details.open) {
            this.scrollIntoViewIfNeeded(details);
        }
    }

    scrollIntoViewIfNeeded(details) {
        setTimeout(() => {
            const rect = details.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            
            if (!isVisible) {
                details.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        }, 100);
    }

    handleDeepLinking() {
        const hash = window.location.hash.slice(1);
        if (!hash) return;

        const targetDetails = this.root.querySelector(
            `details.faq-item[data-faq-id="${hash}"]`
        );

        if (targetDetails) {
            targetDetails.open = true;
            setTimeout(() => {
                targetDetails.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }
}