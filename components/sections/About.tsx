import React from 'react';
import SelectorItem from '../atom/selector/SelectorItem';
import Title from '../atom/Title';
import Icon from '../atom/icons';

export default function About() {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className="flex flex-col top-[17vh] absolute w-[15.25rem]">
      <Title title="about me" />
      <div className="flex items-center w-full mt-5 justify-between">
        <SelectorItem
          text="about"
          selected={selected === 0}
          onClick={() => {
            setSelected(0);
          }}
        />
        <SelectorItem
          text="skills"
          selected={selected === 1}
          onClick={() => {
            setSelected(1);
          }}
        />
        <SelectorItem
          text="bio"
          selected={selected == 2}
          onClick={() => {
            setSelected(2);
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        {selected === 0 && (
          <div className="text-white text-center mt-5 flex flex-col gap-5 font-light">
            <p>
              I'm Juan Matus, a passionately curious software developer from
              Nicaragua.
            </p>
            <p>
              I like hard challenges and learning new things - I feel
              comfortable in spaces where I can grow and learn from (and also
              teach) other people.
            </p>
            <p>
              <span className="font-semibold">Fun fact: </span>
              my colleagues say I code fast.
            </p>
          </div>
        )}
        {selected === 1 && (
          <div className="grid grid-cols-2 place-content-between w-full mt-5">
            <div className="flex flex-col gap-3">
              <p className="font-extrabold text-[#2660e4]">Typescript</p>
              {['ReactJS', 'NextJS', 'Redux', 'NodeJS', 'NestJS', 'Framer'].map(
                (skill, index) => (
                  <p key={index} className="text-white font-extrabold">
                    {skill}
                  </p>
                ),
              )}
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-extrabold text-[#2660e4]">CSS</p>
              {['Sass', 'TailwindCSS'].map((skill, index) => (
                <p key={index} className="text-white font-extrabold">
                  {skill}
                </p>
              ))}
              <p
                className="font-extrabold 
                text-transparent bg-clip-text bg-gradient-to-r from-[#2896d6] to-white
              "
              >
                Python
              </p>
              {['MatplotLib', 'Seaborn', 'Pandas'].map((skill, index) => (
                <p key={index} className="text-white font-extrabold">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        )}
        {selected === 2 && (
          <div className="flex flex-col items-center text-white gap-y-5 mt-5 text-center font-light">
            <p>🚩</p>
            <p>born in 2002</p>
            <Icon name="down-arrow" />
            <p>got in love with code in 2009</p>
            <Icon name="down-arrow" />
            <p>graduated high school as best student in 2019</p>
            <Icon name="down-arrow" />
            <p>started working as a software engineer in 2020</p>
          </div>
        )}
      </div>
    </div>
  );
}
