import React, { Component } from 'react'
import {  Col, Container, Row } from 'reactstrap'
import {Link} from "react-router-dom"
import Header from "../components/Header"
import p from "../aessts/p/p.png"
import { connect } from "react-redux";
import {
  addPost,
  fetchPosts, 
  deletePost,
  editPost,
} from "../store/actions/actions";
import  "../aessts/CSS/blog.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Footer from './Footer'
 class Blog extends Component {
   constructor(props){
     super(props)
     this.state={
       amount:""
     }
   }

   componentDidMount=()=>{
     this.props.fetchPosts()
   }
    render() {
        return (
           

            <div>
                 <Header/>
             
                <Container>
                    <Row>
                        <Col lg="4">
                        <Card>
        <CardImg top width="100%" src={p}/>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
           <h5 classNam="B"> <b> How to improve your Remote Hiring</b>  </h5>
                                 </CardSubtitle>
          <CardText>Some quick example text to build on <h5 classNam="B">the card title and make up the bulk of the card's content.</h5></CardText>
        <Link to="/bbb  ">
        <Button>Button</Button>
        </Link>  
        </CardBody>
      </Card>
                        </Col>
          <Col lg="4">
          <Card>
        <CardImg top width="100%" src={p}/>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
           <h5 classNam="B"> <b> How to improve your Remote Hiring</b>  </h5>
                                 </CardSubtitle>
          <CardText>Some quick example text to build on <h5 classNam="B">the card title and make up the bulk of the card's content.</h5></CardText>
        <Link to="/bbb  ">
        <Button>Button</Button>
        </Link>  
        </CardBody>
      </Card>
                        </Col> 
                        <Col lg="4">
                        <Card>
                         
        <CardImg top width="100%" src={p}/>
        <CardBody>
          <CardTitle tag="h5">
            {this.props.posts.map((item , index)=>{
              return(
              <p key={index}>{item.amount}</p>
            )})}
            Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
           <h5 classNam="B"> <b> kjnjn</b>  </h5>
                                 </CardSubtitle>
                                 {this.props.posts.map((item , index)=>{
                            return(
                              <CardBody key={index}>
                                   <p>{item.amount}</p>
                                   <CardText>
                                       {item.amount}
                                   </CardText>
                              </CardBody>
                        
                            )
                          })}
          <CardText>bsnbdd<h5 classNam="B">the card title and make up the bulk of the card's content.</h5></CardText>
        <Link to="/bbb  ">
        <Button>Button</Button>
        </Link>  
        </CardBody>
      </Card>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Footer/>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
    userid: state.userid,
  };
};  
export default connect(mapStateToProps, {
  fetchPosts,
  addPost,

  deletePost,
  editPost,
})(Blog);