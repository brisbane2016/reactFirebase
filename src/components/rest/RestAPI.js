import React from 'react';
import { Button } from 'react-bootstrap';

class RestAPI extends React.Component {

    state = {
        testData: []
    };

    headers = [

        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Title' },
        { key: 'body', label: 'Body' }
    ];


    componentDidMount() {
        this.setData();
    }
    setData = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState(() => ({
                    testData: result

                }));
            });

    }
    deleteAction = () => {

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        }).then(() => {
            alert("Deleted!");
        }).catch(err => {
            console.error(err)
        });
    }

    updateAction = () => {

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json();
        }).then(json => {

            this.setState({
                testData: [json]
            });
            alert("updated");

        })
    }

    postAction = () => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        }).then(res => res.json())
         .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    render() {

        console.log(this.state.testData);
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Button variant="primary" disabled>Read</Button>
                        </div>
                        <div className="col-sm">
                            <Button variant="primary" onClick={this.postAction}>Post</Button>
                        </div>
                        <div className="col-sm">
                            <Button variant="primary" onClick={this.updateAction}>Update</Button>
                        </div>
                        <div className="col-sm">
                            <Button variant="primary" onClick={this.deleteAction}>Delete</Button>
                        </div>

                    </div>
                </div>




                <table>
                    <thead>
                        <tr>
                            {
                                this.headers.map(function (h) {
                                    return (
                                        <th key={h.key}>{h.label}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {


                            this.state.testData ? (
                                this.state.testData.map((item) => (

                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>


                                ))



                            ) : null
                        }
                    </tbody>
                </table>
            </div >


        );

    }


}

export default RestAPI;