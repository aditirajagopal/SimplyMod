import React from 'react';
import { Checkbox, ListGroup, ListGroupItem, Navbar, FormGroup, FormControl, Grid, Row, Col, Tabs, Tab, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';

// To Do: Refactor to handle this structure - 
// { 
//   postTitle: "A Brief Update"
//   comments: [
//     {"id":"1287178","parent":"0","author":"Daniela Faltz","email":"danni.x3@hotmail.de","url":"","ip":"79.223.150.62","date":"2016-02-01T04:01:16.000Z","body":"It's very sad, that I missed to check my mails and missed the chance to join this month in the Wallpaper-Post. But hey – I will try again next month :)"},
//     {"id":"1287179","parent":"0","author":"Maria Rosa","email":"mfernandezlb@wanadoo.es","url":"","ip":"37.132.37.131","date":"2016-02-01T04:20:36.000Z","body":"Muchas gracias! Cuanto donde elegir. Que bien!"},
//     {"id":"1287180","parent":"0","author":"Krzysztof","email":"voluuwordpress@gmail.com","url":"","ip":"83.22.25.63","date":"2016-02-01T04:26:00.000Z","body":"Everything Melts! the best <3"},
//     {"id":"1287181","parent":"0","author":"Fiqhi Pangarso","email":"fps_mail@yahoo.com","url":"","ip":"139.195.219.52","date":"2016-02-01T07:57:53.000Z","body":"Time to Get Up! I love the purple and the circles ... ^_^"}
//   ]
// },
// { 
//   postTitle: "A Fun Reading List for Starters"
//   comments: [
//     {"id":"1287183","parent":"0","author":"Giani","email":"gbalsa@gvcgroup.com","url":"","ip":"200.124.199.108","date":"2016-02-01T09:53:44.000Z","body":"Lindos todos! Dificil escolher um para este mês, mas a mandala me conquistou Obrigada! Lindos todos! Difícil elegir uno para este mes, pero la mandala me conquistó! Gracias!"},
//     {"id":"1287184","parent":"0","author":"Thomas Benton","email":"tlbenton2@hotmail.com","url":"","ip":"72.238.211.168","date":"2016-02-01T10:11:12.000Z","body":"Let's have some monthly calendars with the week starting with Sunday!"},
//     {"id":"1287185","parent":"0","author":"Sheramel","email":"thecaramelrainbow@gmail.com","url":"","ip":"72.27.91.116","date":"2016-02-01T11:37:49.000Z","body":"\"Just Do What You Love Most\" is my absolute favourite, it's beautiful! But I have a few others on slideshow as well ^-^ Kudos to all the artists!"},
//     {"id":"1287237","parent":"0","author":"Denise","email":"engineeress@ieee.org","url":"","ip":"96.226.83.149","date":"2016-02-03T07:39:43.000Z","body":"Craft with Passion on my phone and The System on my laptop. Nice work everyone. Thank you!!"},
//     {"id":"1287239","parent":"0","author":"Amy","email":"amy.ladas@gmail.com","url":"","ip":"198.137.214.36","date":"2016-02-03T09:09:24.000Z","body":"The mandala design in \"Just Do What You Love Most\" is absolutely gorgeous. WOW!"},
//     {"id":"1287314","parent":"1287239","author":"Temeshi","email":"temeshi@tlen.pl","url":"","ip":"188.146.74.238","date":"2016-02-05T22:07:49.000Z","body":"Thank you so much Amy!"}
//   ]
// },
// { 
//   postTitle: "You're the Best"
//   comments: [
//     {"id":"1287315","parent":"1287181","author":"Anna Kanstantsinava","email":"vedmarka@gmail.com","url":"","ip":"93.85.14.40","date":"2016-02-05T23:07:13.000Z","body":"Thanks for choosing my bears :-)"},
//     {"id":"1287317","parent":"0","author":"Sonia","email":"tacones27@gmail.com","url":"","ip":"137.110.33.188","date":"2016-02-06T05:39:37.000Z","body":"Clearly there are many romantics out there, creating lovely wallpapers! Thank you! I love the socks, seems very appropriate (I'm in Southern California where 65 deg is reason enough for a coat) and the sheep and the hearts... captured my romantic side as well."},
//     {"id":"1287565","parent":"0","author":"Olga","email":"boss-woman85@yandex.ru","url":"","ip":"46.119.96.57","date":"2016-02-23T03:03:43.000Z","body":"\"Love Is In The Air\" is really nice! Good job!"},
//     {"id":"1287567","parent":"1287184","author":"ester","email":"gironester@yahoo.com","url":"","ip":"209.165.220.82","date":"2016-02-23T05:06:55.000Z","body":"Do agree!"},
//     {"id":"1288209","parent":"1287565","author":"suman sil","email":"suman.friends83@gmail.com","url":"","ip":"115.118.51.88","date":"2016-03-26T20:50:40.000Z","body":"Thanks mate"}
//     ]
// }




var comments = [
  {"id":"1287180","parent":"0","author":"Krzysztof","email":"voluuwordpress@gmail.com","url":"","ip":"83.22.25.63","date":"2016-02-01T04:26:00.000Z","body":"Everything Melts! the best <3"},
  {"id":"1287178","parent":"0","author":"Daniela Faltz","email":"danni.x3@hotmail.de","url":"","ip":"79.223.150.62","date":"2016-02-01T04:01:16.000Z","body":"It's very sad, that I missed to check my mails and missed the chance to join this month in the Wallpaper-Post. But hey – I will try again next month :)"},
  {"id":"1287183","parent":"0","author":"Giani","email":"gbalsa@gvcgroup.com","url":"","ip":"200.124.199.108","date":"2016-02-01T09:53:44.000Z","body":"Lindos todos! Dificil escolher um para este mês, mas a mandala me conquistou Obrigada! Lindos todos! Difícil elegir uno para este mes, pero la mandala me conquistó! Gracias!"},
  {"id":"1287181","parent":"0","author":"Fiqhi Pangarso","email":"fps_mail@yahoo.com","url":"","ip":"139.195.219.52","date":"2016-02-01T07:57:53.000Z","body":"Time to Get Up! I love the purple and the circles ... ^_^"},
  {"id":"1287179","parent":"0","author":"Maria Rosa","email":"mfernandezlb@wanadoo.es","url":"","ip":"37.132.37.131","date":"2016-02-01T04:20:36.000Z","body":"Muchas gracias! Cuanto donde elegir. Que bien!"},
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

const getDate = date => {
  const d = new Date(date);
  return d.toString();
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

  sortComments(comments) {
    console.log("sort")
    comments.sort(function(a, b) { return new Date(a.date) - new Date(b.date) });
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
          <Button type="submit">Submit</Button>
          <Button type="sort" onClick={() => this.sortComments(this.state.comments)}>Sort</Button>
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
                        <ListGroupItem header={ `${comment.author} said...` } className={ `comment-status ${comment.status}` }>
                          { comment.body } <br />
                          <small>on { getDate(comment.date) } </small> 
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
                        <ListGroupItem header={ `${comment.author} said...` } className={ `comment-status ${comment.status}` }>
                          { comment.body } <br />
                          <small>on { getDate(comment.date) } </small>
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
                        <ListGroupItem header={ `${comment.author} said...` } className={ `comment-status ${comment.status}` }>
                          { comment.body } <br />
                          <small>on { getDate(comment.date) } </small>
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
                        <ListGroupItem header={ `${comment.author} said...` } className={ `comment-status ${comment.status}` }>
                          { comment.body } <br />
                          <small>on { getDate(comment.date) } </small>
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