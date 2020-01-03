import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMostSearch } from '../actions';
import URLconfig from './URLconfig.json';
import { Link } from 'react-router-dom';

class MostSearch extends Component {
  constructor(props){
    super(props);

      this.state={
        mostSearch: null,
        mostSearchByPriority: []
      }

  }

  componentDidMount(){
      var dataArr = [];
      var result = Object.keys(URLconfig).map(function(key) {
        // return [key];
        if(URLconfig[key].Priority < 24 && URLconfig[key].Priority >0){
          return [key];
        }

      });
      this.setState({ mostSearchByPriority: result })
 

  }
  render(){
    const urlPage = Object.keys(URLconfig)



    // const urlList = () => {
    //   return urlPage.map((item) => {
    //     return <div>
    //     <Link to={"/" + item}><li>{item}</li></Link>
    //     </div>
    //   })
    // }
    


const mostSearch =Object.keys(URLconfig)
const firstColumn = mostSearch.slice(0,4).map(item => {
  return <div>
  <Link to={"/" + item}><li>{item}</li></Link>
  </div>
});
const secondColumn = mostSearch.slice(4,8).map(item => {
  return <div>
  <Link to={"/" + item}><li>{item}</li></Link>
  </div>
});
const thirdColumn = mostSearch.slice(8,12).map(item => {
  return <div>
  <Link to={"/" + item}><li>{item}</li></Link>
  </div>
});
const fourthColumn = mostSearch.slice(12,16).map(item => {
  return <div>
  <Link to={"/" + item}><li>{item}</li></Link>
  </div>
});
const fifthColumn = mostSearch.slice(16,20).map(item => {
  return <div>
  <Link to={"/" + item}><li>{item}</li></Link>
  </div>
});

    return <div className='container text-center'>
         <h4 style={{ textAlign:"center", marginTop: "10px", fontFamily:"monospace"}}>Important Conversions</h4>
         <title>CronTab</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
<div style={{ marginTop: "90px"}}>
   <div style={{fontSize: "125%",  textAlign: "left",
     display: "inline-block",
     verticalAlign: "top",
     marginBottom: "3em", margin:"10px"}}>
   {firstColumn}
   </div>

   <div style={{fontSize: "125%",  textAlign: "left",
     display: "inline-block",
     verticalAlign: "top",
     marginBottom: "3em",  margin:"10px"}}>
   {secondColumn}
   </div>

   <div style={{fontSize: "125%",  textAlign: "left",
     display: "inline-block",
     verticalAlign: "top",
     marginBottom: "3em",  margin:"10px"}}>
   {thirdColumn}
   </div>

   <div style={{fontSize: "125%",  textAlign: "left",
     display: "inline-block",
     verticalAlign: "top",
     marginBottom: "3em",  margin:"10px"}}>
   {fourthColumn}
   </div>

   <div style={{fontSize: "125%",  textAlign: "left",
     display: "inline-block",
     verticalAlign: "top",
     marginBottom: "3em",  margin:"10px"}}>
   {fifthColumn}
   </div>
    </div>
    </div>
  }
}

export default {
  component: MostSearch
};
// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     mostSearch: state.mostSearch }
//     ;
// }

// function loadData(store) {
//   return store.dispatch(fetchMostSearch());
// }
// export default {
//   loadData,
//   component: connect(mapStateToProps, { fetchMostSearch })(MostSearch)
// };
