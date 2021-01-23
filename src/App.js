import React from "react";
import "./style.css";
import BookList from './components/BookList'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
   <div className="container">
    <div class="row">
    <div className="col-sm">
      <BookList />
    </div>
  </div>
</div>
  );
}
