function toggleCollapse(element) {
    var content = element.querySelector('.bar-content');
    var collapsibles = document.querySelectorAll('.collapsible');
  
    collapsibles.forEach(function(collapsible) {
      var otherContent = collapsible.querySelector('.bar-content');
      if (collapsible !== element && otherContent.style.display === 'block') {
        otherContent.style.display = 'none';
        collapsible.querySelector('.icon.plus').style.display = 'inline-block';
        collapsible.querySelector('.icon.cross').style.display = 'none';
      }
    });
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      element.querySelector('.icon.plus').style.display = 'inline-block';
      element.querySelector('.icon.cross').style.display = 'none';
    } else {
      content.style.display = 'block';
      element.querySelector('.icon.plus').style.display = 'none';
      element.querySelector('.icon.cross').style.display = 'inline-block';
    }
  }