import React from 'react';
import Header from '../Header';
import database from '../../firebase';


class FirebaseQuery extends React.Component {
    constructor(props) {
        super(props);
        //  this.setData();
        this.events = database.ref('firebase').child('events');
        this.users = database.ref('firebase').child('users');
        this.enventAttendees = database.ref('firebase').child('eventAttendees');
    }

    state = {
        dataset: undefined
    }

    setOne = () => {
        this.users.once('value').then((snapshot) => {
            console.log(snapshot.val());
        });
    }
    set2 = () => {

        this.users.once('value').then((snapshot) => {
            console.log(snapshot.val());
            const list = [];
            snapshot.forEach((childSnapshot) => {
                list.push({
                    ...childSnapshot.val()
                });
            });
            console.log(list.sort((a, b) => (a.age < b.age ? 1 : -1)));
        });

    }
    set3query = (callback) => {
        const query = this.events.orderByChild('name').equalTo('firebase meetup');

        let datanum = [];
        query.on('child_added', snapshot => {

            // const userRef = database.ref('firebase').child('eventAttendees/' + snapshot.key);
            const userRef = this.enventAttendees.child(snapshot.key);
            userRef.once('value').then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    console.log(childSnapshot.key);
                    //const user = database.ref('firebase').child('users/' + childSnapshot.key);
                    const user = this.users.child(childSnapshot.key);
                    user.once('value').then((snap) => {

                        datanum.push(snap.val());
                        callback(datanum);
                    });

                });

            });
        });

    }

    set3 = () => {
        this.set3query((result) => {
            this.setState(() => ({
                dataset: result
            }))
        })
    }



    render() {
        console.log(JSON.stringify(this.state.dataset));
        return (
            <div>
                <Header />
                <p>1.show all user informtion
                    
                   ------- <button onClick={this.setOne}>set1</button>
                </p>
                <p>2.show all user informtion follow by age
                   ------- <button onClick={this.set2}>set2</button>
                </p>
                <p>3. get user information who join firebase meetup events
                ------- <button onClick={this.set3}>set3</button>
                {

                    this.state.dataset && this.state.dataset.map((data)=>(

                            <p key={data.age}>{data.age}</p>
                    ))
                    
                }
                </p>
            </div>



        );
    }

}
export default FirebaseQuery;

