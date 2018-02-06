import React, { Component } from 'react'

class Bootstrap extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <ul>
            <li class='brand'>
              <a href='/'>Clicky Game</a>
            </li>
            <li class=''>
              Click an image to begin!
            </li>
            <li>
              Score: 0 | Top Score: 0
            </li>
          </ul>
        </nav>
        <div className='jumbotron'>
          <h1>Your Project</h1>
          <p>
            Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
            Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation nostrud exercitation sit ex nostrud aliqua officia magna nostrud
            deserunt et esse eu deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
          </p>
        </div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            Non eu sit duis adipisicing esse incididunt ad proident.
          </div>
          <div className='panel-body'>
            Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad adipisicing.Aliquip
            dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad adipisicing.
          </div>
        </div>
      </div>
    )
  }
}

export default Bootstrap
