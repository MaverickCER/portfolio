import { ReactComponent as CodePen } from '../assets/icons/codepen.svg';
import { ReactComponent as CodeSandbox } from '../assets/icons/codesandbox.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';

const SocialShare = [
  {
    iconName: <GitHub />,
    link: 'https://github.com/MaverickCER',
    name: 'GitHub',
  },
  { iconName: <CodePen />, link: 'https://codepen.io/maverickcer', name: 'CodePen' },
  {
    iconName: <CodeSandbox />,
    link: 'https://codesandbox.io/u/MaverickCER',
    name: 'CodeSandbox',
  },
];

const socialList = [
  {
    name: 'GitHub',
    link: 'https://github.com/MaverickCER',
  },
  {
    name: 'CodePen',
    link: 'https://codepen.io/maverickcer',
  },
  {
    name: 'CodeSandbox',
    link: 'https://codesandbox.io/u/MaverickCER',
  },
];

const Social = ({share}) => {
  return (
    <ul>
      {share
        ? SocialShare.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer" aria-label={val.name}>
                {val.iconName}
              </a>
            </li>
          ))
        : socialList.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <div
                  className="first"
                  style={{ display: 'block', width: '100%', textAlign: 'right' }}>
                  {val.name}
                </div>
                <div
                  className="second"
                  style={{ display: 'block', width: '100%', textAlign: 'right' }}>
                  {val.name}
                </div>
              </a>
            </li>
          ))}
    </ul>
  );
};

export default Social;
