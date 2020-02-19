import React, { Component } from 'react';
import { todos } from './todos.json';

export default class Content extends Component {
    render() {
        return (
            <main role="main" class="container">

                <div class="row">


                    {todos.map(
                        todo => {
                            return (
                                <div class="col-sm-12 col-md-4">

                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">{todo.title}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">{todo.date}</h6>
                                            <p class="card-text">{todo.description}</p>
                                            <a href="#" class="card-link">link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    )}


                </div>


            </main>
        );
    }
}
