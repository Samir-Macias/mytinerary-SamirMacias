import React from 'react';



const SignOut = () => {
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.push('/');
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;