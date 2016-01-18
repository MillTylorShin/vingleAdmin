import React from 'react';
import { Link } from 'react-router';

export default class Application extends React.Component {
 render() {
   return (
       <div className="application">
         <div>
           <div onClick={this.handleClick}>클라이언트 동작 테스트</div>
           <div onClick={this.handleClick}>안녕 익스프레스 안녕 리엑트 안녕 리덕스~~</div>
           <Link to="/">인덱스 페이지로</Link><br/>
         </div>
         {this.props.children}
       </div>
   );
 }

 handleClick() {
   alert("클라이언트 동작 테스트");
 }
};
