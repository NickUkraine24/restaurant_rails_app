import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AdminRoutes from "components/AdminRoutes";


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('props-data');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <Router>
      <Route render={() => <AdminRoutes data={data} />} />
    </Router>,
    node,
  )
});
