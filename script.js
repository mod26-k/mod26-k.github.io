const tabs = document.querySelectorAll('.project-container input[type="radio"]');
const contents = document.querySelectorAll('.project-container .content');

tabs.forEach((tab, index) => {
  tab.addEventListener('change', () => {
    contents.forEach((content, contentIndex) => {
      if (contentIndex !== index) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});

// Show only the first content initially
contents.forEach((content, index) => {
  if (index !== 0) {
    content.style.display = 'none';
  }
});
