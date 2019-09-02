import React from 'react';
//import Header from '../../components/Header';
import database from '../../firebase';
import uuid from 'uuid';
import { connect } from 'react-redux';

class Firebase extends React.Component {
    constructor(props) {
        super(props);
        this.setData();
    }
    state = {

        dataset: undefined,
        InsertData: undefined,
        number: 5
    }
    setData = () => {
        //初始化，给 state 加上 firebase 数据库的data
const userid = this.props.id;
        database.ref(`options/${userid}`).once('value').then((snapshot) => {
            const list = [];
            snapshot.forEach((childSnapshot) => {
                list.push({
                    referenceId: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            console.log(list);
            this.setState(() => ({
                dataset: list,
                number: 4
            }));
        });


    };

    insertData = () => {
        // 注入新的数据
        //一定要在 firebase里面 create new array
        // 否则会出现array 是空的问题
        const listOption = { id: uuid.v4(), name: "insertData" };
        const userid = this.props.id;
        database.ref(`options/${userid}`).push(listOption).then(
            (ref) => {
                const newList = { referenceId: ref.key, ...listOption };
                this.setData(prevState => ({
                    dataset: [...prevState.dataset, newList]
                }));

            }

        );


    }
    deleteData = (id) => {
        //删除数据
        const userid = this.props.id;
        database.ref(`options/${userid}/${id}`).remove().then(
            (ref) => {
                const newData = this.state.dataset.filter(option => option.referenceId !== id);
                this.setData(() => ({
                    dataset: newData
                }));
            }
        )
    }
    editData = (id) => {
        //更新数据
        const newlist = {
            id: 1,
            name: "gary"

        }
        const userid = this.props.id;
        database.ref(`options/${userid}/${id}`).update(newlist).then((ref) => {


            this.setState(state => {
                // 
                //这是比较正规的setState（）写法，但是上面在delete里面的写法也是好用的
                //
                const mylist = state.dataset.map((data) => {

                    if (data.referenceId === id) {
                        return { referenceId: data.referenceId, ...newlist };
                    } else {
                        return data;
                    }
                });

                return {
                    dataset: mylist
                };
            });

        });
    }

    render() {

        console.log(JSON.stringify(this.state.dataset));

        return (

            <div>

              

                <p>firebase testing</p>
                <p>initial Dataset , SetDate </p>
                <ul>
                    {
                        //在.map里面 做 onClick,一定要用 function
                        //
                        this.state.dataset &&
                        this.state.dataset.map((ref, index) => (
                            <li key={ref.referenceId} >{ref.referenceId} + {ref.name}
                                <button onClick={() => { this.deleteData(ref.referenceId) }}>
                                    Delete
                         </button>
                                <button onClick={() => { this.editData(ref.referenceId) }}>
                                    Edite
                         </button>
                            </li>

                        )
                        )

                    }


                </ul>






                <button onClick={this.insertData}>insert Data</button>

            </div>

        );


    }
}

const mapStateToProps = state => ({
    id: state.authReducer.uid
})



export default connect(mapStateToProps,undefined)(Firebase);