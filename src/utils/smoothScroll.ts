/**
 * Utility function to enable smooth scrolling between sections
 */

// Function to handle smooth scrolling for anchor links
export const smoothScrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    // Calculate the element's position
    const offset = 80; // Adjust this value based on your header height or desired offset
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    // Smooth scroll to the element
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without the jump
    window.history.pushState(null, '', `#${targetId}`);
  }
};

// Initialize smooth scrolling for all anchor links
export const initSmoothScroll = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          smoothScrollToElement(e as any, targetId);
        }
      });
    });
  });
};

// Function to handle scrolling to sections with animation
export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  
  if (section) {
    const offset = 80; // Adjust as needed
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}; 