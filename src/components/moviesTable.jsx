import React,{Component} from 'react';
import Table from "./common/Table";
import Like from "./common/like";
import {Link} from "react-router-dom";
class MoviesTable extends Component {
    columns=[
        {path:'title',label:'Title',content:movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {
         key:'like', 
         content:movie =><Like liked={movie.liked} onClick={()=>this.props.onLike(movie)} />
        },
        {key:'Delete',
         content: movie=><button 
         onClick={()=>this.props.onDelete(movie)} 
         className="btn btn-danger btn-sm">Delete
         </button>},
    ]
   
    render() { 
        const {movies,onSort,sortColumn}=this.props
        return ( 
         <Table columns={this.columns}
         data={movies}
         sortColumn={sortColumn}
         onSort={onSort}
         />      
         );   
    }
}
 
export default MoviesTable;


