import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

export class Movies extends Component {
    constructor() {
        super();
        this.state={
            movies:getMovies()
        }
    }

   handelClick =(movie)=>{
       const movies=this.state.movies.filter((m)=>m._id!== movie.id)
       this.setState.movies({movies:movies}) 
   }
    
    render() { 
        return<div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Note</th>
                </tr>
            </thead>

            <tbody>
                {this.state.movies.map ((movie)=>(
                    
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={()=>{this.handelClick(movie)}} className="btn btn-danger">
                                supprimer DAVID
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
       
        
    }
}
 

