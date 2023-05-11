import React, {Component} from "react";
import axios from "axios";

export default class CreateUser extends Component {

    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
        }

    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDeafult();
    
        const user= {
            username: this.state.username,
        }
        console.log(user)

        axios.post("http://localhost:3000/users/add", user)
        .then(res => console.log(res.data));

        this.setState({
            username: ""
        })
    }

    render(){
        return(
           <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUserName}
                    />
                </div>
                    <div className="form-group">
                        <input type="submit"
                        value="Create User"
                        className="btn btn-primary"
                        />
                    </div>
            </form>
           </div>

        )
    }
}