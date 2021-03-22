const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  titleFix()
  
  return tutorials
}

function titleFix() {
  let newTurorials = []
  tutorials.forEach((tutorial, index) => {
    let titleArray = tutorial.split(" ").map(title => {
      return title.substr(0,1).toUpperCase() + title.substr(1)
    })

    let newTitle = ""
    titleArray.forEach(word => {
      newTitle = newTitle + word + " "
    })

    
    newTurorials.push(newTitle.trim())
  })

  newTurorials.forEach((fixed, index) => {
    tutorials[index] = fixed
  })
}