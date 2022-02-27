replaceText(document.body)

function replaceText(element) 
{
  if (element.hasChildNodes()) 
  {
    element.childNodes.forEach(replaceText)
  } 
  else if (element.nodeType === Text.TEXT_NODE) 
  {

    if (element.textContent.match(/shit/gi))   // cuss word 1
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(shit)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }

    if (element.textContent.match(/fuck/gi))   // cuss word 2
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(fuck)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }

    if (element.textContent.match(/asshole/gi))    // cuss word 3
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(asshole)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }

    if (element.textContent.match(/dick/gi))    // cuss word 4
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(bitch)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }

    if (element.textContent.match(/bitch/gi))    // cuss word 5
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(cunt)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }

    if (element.textContent.match(/cunt/gi))    // cuss word 3
    {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(cunt)/gi, 
      '<span style="background-color: black; color: black;">$1</span>')
      element.replaceWith(newElement)
    }
  }
}