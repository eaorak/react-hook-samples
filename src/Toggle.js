import React, { useState, useContext } from 'react';
import { UserContext } from './App';

export const Toggle = () => {
  const [toggled, setToggled] = useState(false)
  const { isUser } = useContext(UserContext)
  if (!isUser) return null

  return (
    <div>
      <button onClick={() => setToggled(!toggled)}>Toggle</button>
      {toggled && <h2>Hello!</h2>}
    </div>
  )
}

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }