/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
import React, { useEffect, useState } from 'react';
import './ex4.css';

import Superheroes from './Superheroes';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const selectionMarvel = superheroes.filter((superhero) => superhero.biography.publisher === 'Marvel Comics').filter((superhero) => superhero.appearance.gender === 'Female').filter((superhero) => superhero.appearance.eyeColor === 'Green');

  function tbody(selection) {
    const answer = selection.map((singleElem) =>
      <Superheroes
        image={singleElem.images.sm}
        name={singleElem.name}
        firstAppearance={singleElem.biography.firstAppearance}
        occupation={singleElem.work.occupation} />
    );
    return answer;
  }

  return (
    <div>
      {
        superheroes.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>
                  <p>Avatar</p>
                </td>
                <td>
                  <p>Name</p>
                </td>
                <td>
                  <p>First Appearance</p>
                </td>
                <td>
                  <p>Occupation</p>
                </td>
              </tr>
            </thead>
            <tbody>{tbody(selectionMarvel)}</tbody>
          </table>
        )
      }
    </div>
  );
};
