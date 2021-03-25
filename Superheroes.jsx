/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/destructuring-assignment */
const Superheroes = (props) => (
  <tr>
    <td>
      <img src={props.image} />
    </td>
    <td>
      <p>{props.name}</p>
    </td>
    <td>
      <p>{props.firstAppearance}</p>
    </td>
    <td>
      <p>{props.occupation}</p>
    </td>
  </tr>
);

export default Superheroes;
