import React from 'react';
import { Checkbox, ListGroup, ListGroupItem, Navbar, FormGroup, FormControl, Grid, Row, Col, Tabs, Tab, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';

var comments = [
  {"id":"1287178","parent":"0","author":"Daniela Faltz","email":"danni.x3@hotmail.de","url":"","ip":"79.223.150.62","date":"2016-02-01T04:01:16.000Z","body":"It's very sad, that I missed to check my mails and missed the chance to join this month in the Wallpaper-Post. But hey – I will try again next month :)"},
  {"id":"1287179","parent":"0","author":"Maria Rosa","email":"mfernandezlb@wanadoo.es","url":"","ip":"37.132.37.131","date":"2016-02-01T04:20:36.000Z","body":"Muchas gracias! Cuanto donde elegir. Que bien!"},
  {"id":"1287180","parent":"0","author":"Krzysztof","email":"voluuwordpress@gmail.com","url":"","ip":"83.22.25.63","date":"2016-02-01T04:26:00.000Z","body":"Everything Melts! the best <3"},
  {"id":"1287181","parent":"0","author":"Fiqhi Pangarso","email":"fps_mail@yahoo.com","url":"","ip":"139.195.219.52","date":"2016-02-01T07:57:53.000Z","body":"Time to Get Up! I love the purple and the circles ... ^_^"},
  {"id":"1287183","parent":"0","author":"Giani","email":"gbalsa@gvcgroup.com","url":"","ip":"200.124.199.108","date":"2016-02-01T09:53:44.000Z","body":"Lindos todos! Dificil escolher um para este mês, mas a mandala me conquistou Obrigada! Lindos todos! Difícil elegir uno para este mes, pero la mandala me conquistó! Gracias!"},
  {"id":"1287184","parent":"0","author":"Thomas Benton","email":"tlbenton2@hotmail.com","url":"","ip":"72.238.211.168","date":"2016-02-01T10:11:12.000Z","body":"Let's have some monthly calendars with the week starting with Sunday!"},
  {"id":"1287185","parent":"0","author":"Sheramel","email":"thecaramelrainbow@gmail.com","url":"","ip":"72.27.91.116","date":"2016-02-01T11:37:49.000Z","body":"\"Just Do What You Love Most\" is my absolute favourite, it's beautiful! But I have a few others on slideshow as well ^-^ Kudos to all the artists!"}
];


const getCommentsOfStatus = (comments, status) => {
  let getCmtsOfStatus = [];
  comments.forEach(comment => {
    if(comment.status === status) {
      getCmtsOfStatus.push(comment);
    }
  });
  return getCmtsOfStatus;
}

class SimplyMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 1, comments: comments};
    this.handleSelect = this.handleSelect.bind(this);
    this.initializeComments = this.initializeComments.bind(this);
    this.setCommentStatus = this.setCommentStatus.bind(this);
    this.navbarInstance = this.navbarInstance.bind(this);
  }

  componentWillMount() {
    this.initializeComments(this.state.comments);
  }
  handleSelect(key) {
    this.setState({key: key});
  }

  initializeComments() {
    console.log('initialized?')
    this.state.comments.forEach(comment => {
      Object.assign(comment, {status: 'pending'} )
    });
  }

  setCommentStatus(comments, comment, status) {
    const index = comments.indexOf(comment);
    try {
      comments[index].status = status;
      this.setState({comments: comments})
      console.log(comments[index].body);
      console.log(comments[index].status);
    } catch (e) {
      console.log("error: can't set status")
    }
  }

  bulkCommentStatus(comments, status) {
    comments.forEach(comment => {
      comment.status = status;
    });
    this.setState({comments: comments});    
  }

  navbarInstance(key) {
    let buttonGroup;
    switch(key) {
      case 1:
        buttonGroup = 
          <ButtonGroup>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'approved')}>Approve All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'deleted')}>Delete All</Button>
          </ButtonGroup>;
          break;
      case 2:
        buttonGroup = 
          <ButtonGroup>
            <Button disabled>Approve All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'pending')}>Rereview All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'deleted')}>Delete All</Button>
          </ButtonGroup>;
          break;
      case 3:
        buttonGroup = 
          <ButtonGroup>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'approved')}>Approve All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'pending')}>Rereview All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'deleted')}>Delete All</Button>
          </ButtonGroup>;
          break;
      case 4:
        buttonGroup = 
          <ButtonGroup>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'approved')}>Approve All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'pending')}>Rereview All</Button>
            <Button onClick={() => this.bulkCommentStatus(this.state.comments, 'deleted')}>Delete All</Button>
          </ButtonGroup>;
          break;
    }
    return(
      <Navbar>
        <Navbar.Form>
            { buttonGroup }
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar>
    )
  }

  render() {
    // const AllComments = this.initializeComments(comments);
    return (
      <Grid>
        <Row>
          <h1>Simple Comment Moderator Tool</h1><small></small>
        </Row>
        <Row>
          <div>
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
                  <Tab eventKey={1} title="Pending">
                    { this.navbarInstance(this.state.key) }
                    <ListGroup>
                      { getCommentsOfStatus(this.state.comments, 'pending').map(comment => 
                        <ListGroupItem header={ `${comment.author} says...` }>
                          <p>{ comment.body } </p>
                          <ButtonToolbar>
                            <Button bsStyle="success" id={"btn-approved"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'approved')}>Approved</Button>
                            <Button className="delete" bsStyle="danger" id={"btn-del"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'deleted')}>Delete</Button>
                          </ButtonToolbar>
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Tab>
                  <Tab eventKey={2} title="Approved">
                    { this.navbarInstance(this.state.key) }
                    <ListGroup>
                      { getCommentsOfStatus(this.state.comments, 'approved').map(comment => 
                        <ListGroupItem header={ `${comment.author} says...` }>
                          <p>{ comment.body } </p>
                          <ButtonToolbar>
                            <Button bsStyle="success" id={"btn-approved"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'approved')} disabled>Approved</Button>
                            <Button className="delete" bsStyle="danger" id={"btn-del"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'deleted')}>Delete</Button>
                          </ButtonToolbar>
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Tab>
                  <Tab eventKey={3} title="Deleted">
                    { this.navbarInstance(this.state.key) }
                    <ListGroup>
                      { getCommentsOfStatus(this.state.comments, 'deleted').map(comment => 
                        <ListGroupItem header={ `${comment.author} says...` }>
                          <p>{ comment.body } </p>
                          <ButtonToolbar>
                            <Button bsStyle="success" id={"btn-approved"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'approved')}>Approved</Button>
                            <Button className="delete" bsStyle="danger" id={"btn-del"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'deleted')} disabled>Delete</Button>
                          </ButtonToolbar>
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Tab>
                  <Tab eventKey={4} title="All">
                    { this.navbarInstance(this.state.key) }
                    <ListGroup>
                      {this.state.comments.map(comment =>
                        <ListGroupItem header={ `${comment.author} says...` }>
                          <p>{ comment.body } </p>
                          <ButtonToolbar>
                            <Button bsStyle="success" id={"btn-approved"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'approved')}>Approved</Button>
                            <Button className="delete" bsStyle="danger" id={"btn-del"+this.props.index} onClick={() => this.setCommentStatus(this.state.comments, comment, 'deleted')} >Delete</Button>
                          </ButtonToolbar>
                        </ListGroupItem>
                      )}
                    </ListGroup>
                  </Tab>
                </Tabs>
          </div>
        </Row>
      </Grid>
    );
  }
}
export default SimplyMod;