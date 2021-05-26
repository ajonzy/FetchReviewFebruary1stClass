import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./navbar"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Calendar from "./pages/calendar"
import File from "./pages/file"
import PortfolioSingle from "./pages/portfolioSingle"
import CalendarSingle from "./pages/calendarSingle"
import FileSingle from "./pages/fileSingle"
import NotFound from "./pages/notFound"
import Footer from "./footer"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      portfolioData: []
    }

    this.updatePortfolioData = this.updatePortfolioData.bind(this)
  }

  updatePortfolioData(data) {
    this.setState({ portfolioData: data })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" render={props => <Portfolio updatePortfolioData={this.updatePortfolioData} {...props} />} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/file" component={File} />
            <Route path="/portfolio/single" render={props => <PortfolioSingle data={this.state.portfolioData} {...props} />} />
            <Route path="/calendar/single/:month/:year" component={CalendarSingle} />
            <Route path="/file/single" component={FileSingle} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
