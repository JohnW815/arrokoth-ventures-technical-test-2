import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/reducer/addTodo.reducer'

const InputField = (props) => {

    const [todo,setTodo] = useState('');

    const handleChange = e => {setTodo(e.target.value)};
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(todo)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='todo' placeholder='Enter your todo...' onChange={handleChange}/>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
})

export default connect(null,mapDispatchToProps)(InputField);