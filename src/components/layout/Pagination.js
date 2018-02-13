import React, { Component } from 'react';

class Pagination extends Component {

  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination pagination-sm">
          <li>
            <a href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="active"><a href="">1 <span className="sr-only">(current)</span></a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li>
            <a href="" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;