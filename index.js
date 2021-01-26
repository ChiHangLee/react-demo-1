console.log('hi')


const div = (
  t('div',
    t('p',
      t('span', 'hi')))
)

// const div = (
//   <div>
//     <p>
//       <span>hi</span>
//     </p>
//   </div>
// )



document.body.appendChild(div)


function t(tagName, children) {

  const element = document.createElement(tagName)
  if (children) {
    if (typeof children === 'string') {
      var childElement = document.createTextNode(children)
      element.appendChild(childElement)
    } else {
      element.appendChild(children)
    }
  }
  return element
}
