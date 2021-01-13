import React, { useRef, useEffect } from 'react';
import Header from './../Header';
import About from './../About';

const Home = (props) => {
    return (
        <>
            <Header />
            <About />
        </>
    )
    
}


export default Home;

// import React from 'react';
// // ref can only be used on class components
// class SomeComponent extends Component {
//   // get a reference to the element after the component has mounted
//   componentDidMount(){
//     M.Sidenav.init(this.sidenav);
//   }

//   render(){
//     return (
//       <ul className={this.props.classes}
//           ref={ (sidenav) => {this.sidenav = sidenav} }
//           id={this.props.id}>
//         // menuItems
//       </ul>
//     )
//   }
// }