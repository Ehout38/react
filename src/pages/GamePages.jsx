import { Link, Navigate, useNavigate } from 'react-router';
import { useGame } from '../context/GameContext';

export function RequireStep({ step, children }) {
  const { completedStep, data } = useGame();
  const validPersonalData = data.name.trim().length > 0 && Number(data.age) >= 6 && Number(data.age) <= 120;
  if (step > 1 && (completedStep < 1 || !validPersonalData)) return <Navigate to="/register/step-1" replace />;
  if (step > 2 && (completedStep < 2 || !data.avatar)) return <Navigate to="/register/step-2" replace />;
  if (step > 3 && completedStep < 3) return <Navigate to="/register/step-3" replace />;
  return children;
}

function Steps({ current }) {
  return <p className="notice">Game registration | Step {current} of 3</p>;
}

export function FormStep1() {
  const { data, updateData, setCompletedStep } = useGame();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!data.name.trim()) return;
    updateData({ name: data.name.trim() });
    setCompletedStep(current => Math.max(current, 1));
    navigate('/register/step-2');
  }

  return (
    <section className="form-page">
      <h1>Your game profile</h1><Steps current={1} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="player-name">Player name</label>
        <input id="player-name" value={data.name} maxLength={40} pattern=".*\S.*" title="Enter at least one visible character." required onChange={event => updateData({ name: event.target.value })} />
        <label htmlFor="player-age">Age</label>
        <input id="player-age" type="number" min="6" max="120" step="1" value={data.age} required onChange={event => updateData({ age: event.target.value })} />
        <div className="actions"><Link to="/">Home</Link><button type="submit">Next: avatar</button></div>
      </form>
    </section>
  );
}

export function FormStep2() {
  const { data, updateData, setCompletedStep } = useGame();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setCompletedStep(current => Math.max(current, 2));
    navigate('/register/step-3');
  }

  return (
    <section className="form-page">
      <h1>Choose an avatar</h1><Steps current={2} />
      <form onSubmit={handleSubmit}>
        <fieldset><legend>Character</legend><div className="avatar-options">
          {['Knight', 'Mage', 'Ranger'].map(avatar => <label className="avatar" key={avatar}><input type="radio" name="avatar" value={avatar} checked={data.avatar === avatar} required onChange={event => updateData({ avatar: event.target.value })} /><span className="avatar-mark" aria-hidden="true">{avatar[0]}</span><span>{avatar}</span></label>)}
        </div></fieldset>
        <div className="actions"><Link to="/register/step-1">Back</Link><button type="submit">Next: preferences</button></div>
      </form>
    </section>
  );
}

export function FormStep3() {
  const { data, updateData, setCompletedStep } = useGame();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setCompletedStep(3);
    navigate('/register/summary');
  }

  return (
    <section className="form-page">
      <h1>Game preferences</h1><Steps current={3} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty" value={data.difficulty} onChange={event => updateData({ difficulty: event.target.value })}><option value="easy">Easy</option><option value="normal">Normal</option><option value="hard">Hard</option></select>
        <label className="check"><input type="checkbox" checked={data.sound} onChange={event => updateData({ sound: event.target.checked })} />Enable sound</label>
        <label className="check"><input type="checkbox" checked={data.newsletter} onChange={event => updateData({ newsletter: event.target.checked })} />Receive game news</label>
        <div className="actions"><Link to="/register/step-2">Back</Link><button type="submit">Review profile</button></div>
      </form>
    </section>
  );
}

export function Summary() {
  const { data, confirmed, setConfirmed, reset } = useGame();
  const navigate = useNavigate();

  function startAgain() {
    reset();
    navigate('/register/step-1');
  }

  return (
    <section className="form-page">
      <h1>{confirmed ? 'Profile confirmed' : 'Review your profile'}</h1>
      {confirmed && <p className="success" role="status">Welcome, {data.name}! Your game profile is ready.</p>}
      <dl className="summary"><dt>Player name</dt><dd>{data.name}</dd><dt>Age</dt><dd>{data.age}</dd><dt>Avatar</dt><dd>{data.avatar}</dd><dt>Difficulty</dt><dd>{data.difficulty}</dd><dt>Sound</dt><dd>{data.sound ? 'Enabled' : 'Disabled'}</dd><dt>Game news</dt><dd>{data.newsletter ? 'Yes' : 'No'}</dd></dl>
      <div className="actions">{confirmed ? <button onClick={startAgain}>Create another profile</button> : <><Link to="/register/step-3">Back</Link><button onClick={() => setConfirmed(true)}>Confirm profile</button></>}</div>
    </section>
  );
}
